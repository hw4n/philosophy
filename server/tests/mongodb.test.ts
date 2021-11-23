import mongoose from 'mongoose';
import quote from '../models/Quote';
import mockup from './mockup.json';

describe('MongoDB Functioanlity Test', () => {
  beforeAll(async () => {
    if (!process.env.DBURI) {
      throw new Error('No DBURI provided');
    }
    await mongoose.connect(process.env.DBURI);
    await quote.collection.drop();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('collection dropped', async () => {
    const count = await quote.countDocuments();
    expect(count).toBe(0);
  });

  test('inserting mockup data', async () => {
    const inserted = await quote.insertMany(mockup);
    expect(inserted.length).toBe(mockup.length);
  });

  test('querying works', async () => {
    const quotes = await quote.find({});
    expect(quotes.length).toBeGreaterThanOrEqual(0);
  });
});
