import mongoose from 'mongoose';
import quote from '../models';

describe('MongoDB Functioanlity Test', () => {
  beforeAll(async () => {
    if (!process.env.DBURI) {
      throw new Error('No DBURI provided');
    }
    await mongoose.connect(process.env.DBURI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('querying works', async () => {
    const quotes = await quote.find({});
    expect(quotes.length).toBeGreaterThanOrEqual(0);
  });
});
