import { Router } from 'express';

const router = Router();

router.get('/quote', (req, res) => {
  res.status(200).json({
    message: 'GET quote',
  });
});

router.get('/quote/:id', (req, res) => {
  res.status(200).json({
    message: 'GET quote by id',
  });
});

router.post('/quote', (req, res) => {
  const { quote, saidBy } = req.body;

  res.status(200).json({
    message: 'POST quote',
    quote,
    saidBy,
  });
});

export default router;
