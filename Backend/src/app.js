import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '16kb'}));

//Routes Will Come Here
import userRouter from './routes/user.route.js' 

app.use("/api/user", userRouter);


//global error handling middleware
app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500;

    res.status(statusCode)
    .json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

export {
    app
}