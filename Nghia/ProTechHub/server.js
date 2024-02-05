import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

// Configure env
dotenv.config();

// Database config
connectDB();

// Rest Object
const app = express();

// Middelwares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes);

// Rest API
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ProTechHub</h1>");
} );

// Port
const PORT = process.env.PORT || 8080;

// Run
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
});