import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();

// connect db
connectDB();

app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
