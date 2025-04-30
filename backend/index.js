import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.router.js';


dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('Api is working!')
})


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.use('/api/v1/auth', authRouter);


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})