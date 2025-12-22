import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.trim();
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 50);

  if (!query || query.length < 2) {
    return new Response(
      JSON.stringify({ error: 'Query must be at least 2 characters' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Use the search_articles function we created
    const { data, error } = await supabase.rpc('search_articles', {
      search_query: query,
      result_limit: limit,
    });

    if (error) {
      console.error('Search error:', error);

      // Fallback to simple ILIKE search if FTS fails
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('articles')
        .select('id, title, slug, summary, category, published_at, tags')
        .eq('status', 'published')
        .or(`title.ilike.%${query}%,summary.ilike.%${query}%`)
        .order('published_at', { ascending: false })
        .limit(limit);

      if (fallbackError) {
        return new Response(
          JSON.stringify({ error: 'Search failed' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ results: fallbackData || [], query }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ results: data || [], query }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Search exception:', err);
    return new Response(
      JSON.stringify({ error: 'Search failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
