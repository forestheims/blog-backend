DROP TABLE IF EXISTS links CASCADE;

CREATE TABLE links (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  link_url VARCHAR UNIQUE NOT NULL,
  title VARCHAR,
  tags VARCHAR ARRAY,
  order_index INTEGER DEFAULT 0,
);

INSERT INTO links
  (link_url, title, tags)
VALUES
  ('https://www.postgresql.org/', 'PostgreSQL', ARRAY['database', 'open source']),
  ('https://www.postgresql.org/docs/current/index.html', 'PostgreSQL Documentation', ARRAY['documentation', 'open source']),
  ('https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs', 'Building and Testing Node.js - GitHub', ARRAY['YAML', 'GitHub']);


