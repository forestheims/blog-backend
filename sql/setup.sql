DROP TABLE IF EXISTS links CASCADE;

CREATE TABLE links (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  link_url VARCHAR UNIQUE NOT NULL,
  title VARCHAR,
  tags VARCHAR ARRAY,
  order_index BIGINT DEFAULT EXTRACT(EPOCH FROM CURRENT_DATE)
);

INSERT INTO links
  (link_url, title, tags)
VALUES
  ('https://www.postgresql.org/', 'PostgreSQL', ARRAY['database', 'open source']),
  ('https://www.postgresql.org/docs/current/index.html', 'PostgreSQL Documentation', ARRAY['documentation', 'open source']),
  ('https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs', 'Building and Testing Node.js - GitHub', ARRAY['YAML', 'GitHub']),
  ('https://reactrouter.com/en/main','React Router', ARRAY['routing']),
  ('https://beta.reactjs.org/learn/thinking-in-react','Thinking in React', ARRAY['component', 'documentation']),
  ('https://jestjs.io/docs/setup-teardown','Setup and Teardown | Jest', ARRAY['testing', 'documentation']),
  ('https://developer.mozilla.org/en-US/docs/Web/JavaScript','JavaScript | MDN', ARRAY['JavaScript', 'documentation']),
  ('https://javascript.info/','The Modern JavaScript Tutorial', ARRAY['JavaScript', 'documentation']),
  ('https://html.spec.whatwg.org/dev/common-microsyntaxes.html','HTML Standard, Edition for Web Developers', ARRAY['HTML', 'documentation']),
  ('https://jackschaedler.github.io/circles-sines-signals/','Circles Sines and Signals', ARRAY['audio engineering', 'signal processing']),
  ('https://ryanstutorials.net/problem-solving-skills/','Problem Solving Skills and Techniques', ARRAY['problem solving', 'tutorials']);


