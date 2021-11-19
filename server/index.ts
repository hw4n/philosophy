import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

dotenv.config();
const app = express();

const server = app.listen(process.env.PORT || 3000);

app.use(express.json());
app.use('/api', routes);

export default server;
