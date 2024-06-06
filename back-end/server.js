import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ENV } from './config/env.js';

 // CONNECTION à la base de données SQL
import './config/db.js';

// ROUTES

const app = express();

const PORT = ENV.port || 8080;

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// MIDDLEWARE ROUTE

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});