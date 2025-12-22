-- Add full-text search vector column to articles
ALTER TABLE articles ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Create function to generate search vector from title and summary
CREATE OR REPLACE FUNCTION articles_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.summary, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.tags, ' '), '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update search vector
DROP TRIGGER IF EXISTS articles_search_vector_trigger ON articles;
CREATE TRIGGER articles_search_vector_trigger
  BEFORE INSERT OR UPDATE OF title, summary, tags ON articles
  FOR EACH ROW
  EXECUTE FUNCTION articles_search_vector_update();

-- Create GIN index for fast full-text search
CREATE INDEX IF NOT EXISTS idx_articles_search ON articles USING GIN(search_vector);

-- Update existing articles to populate search vector
UPDATE articles SET search_vector =
  setweight(to_tsvector('english', COALESCE(title, '')), 'A') ||
  setweight(to_tsvector('english', COALESCE(summary, '')), 'B') ||
  setweight(to_tsvector('english', COALESCE(array_to_string(tags, ' '), '')), 'C');

-- Create search function for easy querying
CREATE OR REPLACE FUNCTION search_articles(search_query text, result_limit int DEFAULT 20)
RETURNS TABLE (
  id uuid,
  title text,
  slug text,
  summary text,
  category text,
  published_at timestamptz,
  tags text[],
  rank real
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    a.id,
    a.title,
    a.slug,
    a.summary,
    a.category,
    a.published_at,
    a.tags,
    ts_rank(a.search_vector, websearch_to_tsquery('english', search_query)) AS rank
  FROM articles a
  WHERE a.status = 'published'
    AND a.search_vector @@ websearch_to_tsquery('english', search_query)
  ORDER BY rank DESC, a.published_at DESC
  LIMIT result_limit;
END;
$$ LANGUAGE plpgsql;
