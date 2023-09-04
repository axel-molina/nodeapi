import "dotenv/config";
import express from "express";
import cors from "cors";
import productRoute from "./routes/product";
import router from "./routes/product";
import db from "./config/mongo";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(router);
db().then(() => {
    console.log("MongoDB connected");
    });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });