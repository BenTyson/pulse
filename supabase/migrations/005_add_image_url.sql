-- Add image_url column to raw_items table for storing article images from RSS feeds
ALTER TABLE raw_items
ADD COLUMN IF NOT EXISTS image_url TEXT;

COMMENT ON COLUMN raw_items.image_url IS 'URL of the article image extracted from RSS feed';
