import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.router.js'
import userRouter from './routes/user.router.js'
import doctorRouter from './routes/doctor.router.js'
import reviewRouter from './routes/review.router.js'
import bookingRouter from './routes/booking.router.js'

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
    origin: "https://caresync-grop.onrender.com"
}

mongoose.set('strictQuery', false);

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
app.use('/api/v1/users', userRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})
