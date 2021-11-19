import request from 'supertest';
import server from '../index';

describe('Express Routes Test', () => {
  test('GET /quote request', async () => {
    const response = await request(server).get('/api/quote');
    expect(response.status).toBe(200);
  });

  test('POST /quote request', async () => {
    const quote = 'A perfect circle?';
    const saidBy = 'Squidward';

    const response = await request(server)
      .post('/api/quote')
      .send({ quote, saidBy });

    expect(response.status).toBe(200);
    expect(response.body.quote).toBe(quote);
    expect(response.body.saidBy).toBe(saidBy);
  });
});

afterAll(async () => {
  server.close();
});
