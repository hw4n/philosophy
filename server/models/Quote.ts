import mongoose from 'mongoose';
import { IQuoteModel } from '../interfaces/Quote';

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  saidBy: {
    type: String,
    default: 'Anonymous',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<IQuoteModel>('Quote', quoteSchema);
