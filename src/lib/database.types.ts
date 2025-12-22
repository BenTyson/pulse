export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      sources: {
        Row: {
          id: string;
          name: string;
          url: string;
          feed_url: string | null;
          scrape_type: 'rss' | 'html' | 'api' | null;
          scrape_config: Json | null;
          scrape_frequency: 'hourly' | 'daily' | 'weekly' | null;
          is_active: boolean;
          last_scraped_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          url: string;
          feed_url?: string | null;
          scrape_type?: 'rss' | 'html' | 'api' | null;
          scrape_config?: Json | null;
          scrape_frequency?: 'hourly' | 'daily' | 'weekly' | null;
          is_active?: boolean;
          last_scraped_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          url?: string;
          feed_url?: string | null;
          scrape_type?: 'rss' | 'html' | 'api' | null;
          scrape_config?: Json | null;
          scrape_frequency?: 'hourly' | 'daily' | 'weekly' | null;
          is_active?: boolean;
          last_scraped_at?: string | null;
          created_at?: string;
        };
      };
      raw_items: {
        Row: {
          id: string;
          source_id: string | null;
          external_id: string | null;
          title: string;
          content: string | null;
          url: string;
          published_at: string | null;
          scraped_at: string;
          processed: boolean;
        };
        Insert: {
          id?: string;
          source_id?: string | null;
          external_id?: string | null;
          title: string;
          content?: string | null;
          url: string;
          published_at?: string | null;
          scraped_at?: string;
          processed?: boolean;
        };
        Update: {
          id?: string;
          source_id?: string | null;
          external_id?: string | null;
          title?: string;
          content?: string | null;
          url?: string;
          published_at?: string | null;
          scraped_at?: string;
          processed?: boolean;
        };
      };
      articles: {
        Row: {
          id: string;
          raw_item_id: string | null;
          title: string;
          slug: string;
          summary: string | null;
          content: string | null;
          image_url: string | null;
          source_id: string | null;
          source_url: string;
          source_name: string | null;
          author: string | null;
          published_at: string | null;
          category: 'research' | 'business' | 'products' | 'investment' | null;
          subcategory: string | null;
          importance_score: number | null;
          tags: string[] | null;
          status: 'draft' | 'published' | 'archived';
          featured: boolean;
          view_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          raw_item_id?: string | null;
          title: string;
          slug: string;
          summary?: string | null;
          content?: string | null;
          image_url?: string | null;
          source_id?: string | null;
          source_url: string;
          source_name?: string | null;
          author?: string | null;
          published_at?: string | null;
          category?: 'research' | 'business' | 'products' | 'investment' | null;
          subcategory?: string | null;
          importance_score?: number | null;
          tags?: string[] | null;
          status?: 'draft' | 'published' | 'archived';
          featured?: boolean;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          raw_item_id?: string | null;
          title?: string;
          slug?: string;
          summary?: string | null;
          content?: string | null;
          image_url?: string | null;
          source_id?: string | null;
          source_url?: string;
          source_name?: string | null;
          author?: string | null;
          published_at?: string | null;
          category?: 'research' | 'business' | 'products' | 'investment' | null;
          subcategory?: string | null;
          importance_score?: number | null;
          tags?: string[] | null;
          status?: 'draft' | 'published' | 'archived';
          featured?: boolean;
          view_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      wiki_pages: {
        Row: {
          id: string;
          slug: string;
          title: string;
          content: string;
          excerpt: string | null;
          parent_slug: string | null;
          display_order: number;
          meta_description: string | null;
          status: 'draft' | 'published' | 'archived';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          content: string;
          excerpt?: string | null;
          parent_slug?: string | null;
          display_order?: number;
          meta_description?: string | null;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          content?: string;
          excerpt?: string | null;
          parent_slug?: string | null;
          display_order?: number;
          meta_description?: string | null;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
          updated_at?: string;
        };
      };
      companies: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          logo_url: string | null;
          website: string | null;
          company_type: 'manufacturer' | 'startup' | 'research' | 'investor' | null;
          focus_areas: string[] | null;
          founded_year: number | null;
          headquarters: string | null;
          employee_count: string | null;
          funding_total: string | null;
          funding_stage: string | null;
          twitter: string | null;
          linkedin: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          logo_url?: string | null;
          website?: string | null;
          company_type?: 'manufacturer' | 'startup' | 'research' | 'investor' | null;
          focus_areas?: string[] | null;
          founded_year?: number | null;
          headquarters?: string | null;
          employee_count?: string | null;
          funding_total?: string | null;
          funding_stage?: string | null;
          twitter?: string | null;
          linkedin?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          logo_url?: string | null;
          website?: string | null;
          company_type?: 'manufacturer' | 'startup' | 'research' | 'investor' | null;
          focus_areas?: string[] | null;
          founded_year?: number | null;
          headquarters?: string | null;
          employee_count?: string | null;
          funding_total?: string | null;
          funding_stage?: string | null;
          twitter?: string | null;
          linkedin?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      subscribers: {
        Row: {
          id: string;
          email: string;
          frequency: 'daily' | 'weekly';
          subscribed_at: string;
          confirmed: boolean;
          confirmation_token: string | null;
          unsubscribed_at: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          frequency?: 'daily' | 'weekly';
          subscribed_at?: string;
          confirmed?: boolean;
          confirmation_token?: string | null;
          unsubscribed_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          frequency?: 'daily' | 'weekly';
          subscribed_at?: string;
          confirmed?: boolean;
          confirmation_token?: string | null;
          unsubscribed_at?: string | null;
        };
      };
      newsletter_issues: {
        Row: {
          id: string;
          subject: string;
          content: string;
          article_ids: string[] | null;
          sent_at: string | null;
          open_count: number;
          click_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          subject: string;
          content: string;
          article_ids?: string[] | null;
          sent_at?: string | null;
          open_count?: number;
          click_count?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          subject?: string;
          content?: string;
          article_ids?: string[] | null;
          sent_at?: string | null;
          open_count?: number;
          click_count?: number;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

// Convenience types
export type Article = Database['public']['Tables']['articles']['Row'];
export type WikiPage = Database['public']['Tables']['wiki_pages']['Row'];
export type Company = Database['public']['Tables']['companies']['Row'];
export type Source = Database['public']['Tables']['sources']['Row'];
export type Subscriber = Database['public']['Tables']['subscribers']['Row'];
export type NewsletterIssue = Database['public']['Tables']['newsletter_issues']['Row'];
