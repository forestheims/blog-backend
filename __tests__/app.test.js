const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

// const agent = request.agent(app);

describe('user routes test', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('test test', async () => {
    const test = 'test';
    expect(test).toEqual('test');
  });
});
