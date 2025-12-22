-- Allow inserts to articles table from service role or authenticated users
-- For now, allow all inserts (we'll tighten this later with service key)
CREATE POLICY "Allow all inserts to articles" ON articles
  FOR INSERT
  WITH CHECK (true);

-- Allow inserts to raw_items
CREATE POLICY "Allow all inserts to raw_items" ON raw_items
  FOR INSERT
  WITH CHECK (true);

-- Allow updates to raw_items (for marking processed)
CREATE POLICY "Allow all updates to raw_items" ON raw_items
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow updates to sources (for last_scraped_at)
CREATE POLICY "Allow all updates to sources" ON sources
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow inserts to sources
CREATE POLICY "Allow all inserts to sources" ON sources
  FOR INSERT
  WITH CHECK (true);

-- Allow inserts and updates to subscribers (for signups)
CREATE POLICY "Allow all inserts to subscribers" ON subscribers
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow all updates to subscribers" ON subscribers
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow inserts to newsletter_issues
CREATE POLICY "Allow all inserts to newsletter_issues" ON newsletter_issues
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow all updates to newsletter_issues" ON newsletter_issues
  FOR UPDATE
  USING (true)
  WITH CHECK (true);
