import express from "express"
import connectDB from "./services/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;
app.listen(port,() => {
    console.log(`you are in the port ${port}`)
})
