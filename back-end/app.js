import express from 'express';
import cookieParser from 'cookie-parser';

// ROUTES
import tweetRoute from './routes/content.route.js';
import routerUser from './routes/user.route.js';

// CONNECTION à la base de données SQL
import './models/index.js';

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    return next();
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser);
app.use('/api/tweets', tweetRoute);

export default app;