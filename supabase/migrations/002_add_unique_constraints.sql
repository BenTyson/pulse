-- Add unique constraints for upsert operations
ALTER TABLE sources ADD CONSTRAINT sources_url_unique UNIQUE (url);
