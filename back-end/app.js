import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// ROUTES
import tweetRoute from './routes/content.route.js';
import routerUser from './routes/user.route.js';

// CONNECTION à la base de données SQL
import './models/index.js';

// APP EXPRESS
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173/',
    credentials: true,
    optionSuccessStatus: 200
};

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser);
app.use('/api/tweets', tweetRoute);

export default app;