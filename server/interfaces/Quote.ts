import { Document } from 'mongoose';

interface IQuote {
  text: string;
  saidBy: string;
  createdAt: Date;
}

interface IQuoteModel extends Document {}

export { IQuote, IQuoteModel };
