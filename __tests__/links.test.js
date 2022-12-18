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
    expect(res.body).toEqual([
      {
        id: '1',
        link_url: 'test chicken url',
        title: 'TeSt TiTlE',
        tags: ['1', '2'],
      },
    ]);
  });
});
