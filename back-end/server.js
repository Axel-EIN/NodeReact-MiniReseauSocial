import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ENV } from './config/env.js';
import tweetController from './controllers/content.controller.js'

 // CONNECTION à la base de données SQL
import './models/index.js';

// ROUTES
import routerUser from './routes/user.route.js';

const app = express();

const PORT = ENV.port || 8080;

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser);
// MIDDLEWARE ROUTE
app.use('/api/tweets', tweetController);


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});