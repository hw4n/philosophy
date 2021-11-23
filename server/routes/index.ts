import { Router } from 'express';
import quoteRouter from './quote';
import randomRouter from './random';

const router = Router();

router.use('/quote', quoteRouter);
router.use('/random', randomRouter);

export default router;
