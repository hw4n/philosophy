import { Document } from 'mongoose';

interface IQuote {
  text: string;
  saidBy: string;
  createdAt: Date;
  approved: boolean;
}

interface IQuoteModel extends IQuote, Document {}

export { IQuote, IQuoteModel };
