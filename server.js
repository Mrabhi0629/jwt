import express from "express"
import connectDB from "./services/db.js";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from './routes/auth.route.js';
import cors from 'cors'



connectDB();


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use('/api/auth', authRoutes);
const port = process.env.PORT;
app.listen(port,() => {
    console.log(`you are in the port ${port}`)
})
