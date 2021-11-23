import { Router } from 'express';
import quoteModel from '../models/Quote';
import randomRouter from './random';

const router = Router();

router.get('/quote', async (req, res) => {
  const quotes = await quoteModel.find();

  res.status(200).json({
    message: 'GET quote',
    quotes,
  });
});

router.get('/quote/:id', async (req, res) => {
  const quote = await quoteModel.findById(req.params.id);

  if (!quote) {
    return res.status(404).json({
      message: 'Quote not found',
    });
  }

  const { text, saidBy } = quote;

  return res.status(200).json({
    message: 'GET quote by id',
    text,
    saidBy,
  });
});

router.post('/quote', async (req, res) => {
  const { text, saidBy } = req.body;

  const newQuote = await quoteModel.create({ text, saidBy });

  res.status(201).json(newQuote);
});

router.use('/random', randomRouter);

export default router;
