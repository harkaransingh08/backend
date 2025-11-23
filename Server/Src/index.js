import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8888;
const MONGO_URL = "mongodb+srv://harkaransingh08ktl_db_user:d8Gw70pKOL5o1MAQ@cluster0.dt2em9l.mongodb.net/"

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});