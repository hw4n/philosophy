import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

const server = app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => res.status(200).send('Hello World!'));

export default server;
