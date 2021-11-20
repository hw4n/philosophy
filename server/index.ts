import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();
const app = express();

if (!process.env.DBURI) {
  throw new Error('No DBURI provided');
}

mongoose.connect(process.env.DBURI);

const server = app.listen(process.env.PORT || 3000);

app.use(express.json());
app.use('/api', routes);

export default server;
