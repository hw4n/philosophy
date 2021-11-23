import { Router } from 'express';
import quoteModel from '../models/Quote';

const router = Router();

router.get('/quote', async (req, res) => {
  const quote = await quoteModel.aggregate([{ $sample: { size: 1 } }]);

  res.status(200).json({
    message: 'GET random quote',
    ...quote[0],
  });
});

export default router;
