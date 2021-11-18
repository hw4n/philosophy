import request from 'supertest';
import server from '../index';

describe('Route Existence Test', () => {
  test('GET / returns 200', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });
});

afterAll(async () => {
  server.close();
});
