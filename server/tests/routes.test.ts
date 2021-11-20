import request from 'supertest';
import mongoose from 'mongoose';
import server from '../index';

describe('Express Routes Test', () => {
  test('GET /quote request', async () => {
    const response = await request(server).get('/api/quote');
    expect(response.status).toBe(200);
  });

  test('POST /quote request', async () => {
    const text = 'A perfect circle?';
    const saidBy = 'Squidward';

    const response = await request(server)
      .post('/api/quote')
      .send({ text, saidBy });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe(text);
    expect(response.body.saidBy).toBe(saidBy);
    expect(response.body.approved).toBe(false);
    expect(response.body.createdAt).toBeTruthy();
  });
});

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
});
