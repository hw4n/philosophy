/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import mongoose from 'mongoose';
import server from '../index';
import { IQuoteModel } from '../interfaces/Quote';

describe('Express Routes Test', () => {
  let newQuote: IQuoteModel;

  test('GET /quote request', async () => {
    const response = await request(server).get('/api/quote');
    expect(response.status).toBe(200);
    expect(response.body.quotes.length).toBeGreaterThanOrEqual(0);
  });

  test('POST /quote request', async () => {
    const text = 'A perfect circle?';
    const saidBy = 'Squidward';

    const response = await request(server)
      .post('/api/quote')
      .send({ text, saidBy });

    expect(response.status).toBe(201);
    expect(response.body.text).toBe(text);
    expect(response.body.saidBy).toBe(saidBy);
    expect(response.body.approved).toBe(false);
    expect(response.body.createdAt).toBeTruthy();
    newQuote = response.body;
  });

  test('GET /quote/:id request', async () => {
    const response = await request(server).get(`/api/quote/${newQuote._id}`);

    expect(response.status).toBe(200);
    expect(response.body.text).toBe(newQuote.text);
    expect(response.body.saidBy).toBe(newQuote.saidBy);
  });

  test('GET /random/quote request', async () => {
    const response = await request(server).get('/api/random/quote');

    expect(response.status).toBe(200);
    expect(response.body.text).toBeTruthy();
    expect(response.body.saidBy).toBeTruthy();
  });
});

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
});
