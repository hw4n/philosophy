import { Router } from 'express';
import quoteModel from '../models/Quote';

const router = Router();

router.get('/quote', (req, res) => {
  res.status(200).json({
    message: 'GET quote',
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

  res.status(200).json(newQuote);
});

export default router;
