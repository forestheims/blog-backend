const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// const agent = request.agent(app);

describe('user routes test', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('test test', async () => {
    await request(app)
      .post('/api/v1/links/')
      .send({
        link_url: 'test chicken url',
        title: 'TeSt TiTlE',
        tags: ['1', '2'],
      });
    const res = await request(app).get('/api/v1/links/');
    console.log('res', res);
    expect(res.body).toEqual([
      {
        id: '1',
        title: 'PostgreSQL',
        link_url: 'https://www.postgresql.org/',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '2',
        title: 'PostgreSQL Documentation',
        link_url: 'https://www.postgresql.org/docs/current/index.html',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '3',
        title: 'Building and Testing Node.js - GitHub',
        link_url:
          'https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '4',
        title: 'React Router',
        link_url: 'https://reactrouter.com/en/main',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '5',
        title: 'Thinking in React',
        link_url: 'https://beta.reactjs.org/learn/thinking-in-react',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '6',
        title: 'Setup and Teardown | Jest',
        link_url: 'https://jestjs.io/docs/setup-teardown',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '7',
        title: 'JavaScript | MDN',
        link_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '8',
        title: 'The Modern JavaScript Tutorial',
        link_url: 'https://javascript.info/',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '9',
        title: 'HTML Standard, Edition for Web Developers',
        link_url: 'https://html.spec.whatwg.org/dev/common-microsyntaxes.html',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '10',
        title: 'Circles Sines and Signals',
        link_url: 'https://jackschaedler.github.io/circles-sines-signals/',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '11',
        title: 'Problem Solving Skills and Techniques',
        link_url: 'https://ryanstutorials.net/problem-solving-skills/',
        tags: expect.any(Array),
        order_index: 0,
      },
      {
        id: '12',
        title: 'TeSt TiTlE',
        link_url: 'test chicken url',
        tags: expect.any(Array),
        order_index: 1030106181,
      },
    ]);
  });
});
