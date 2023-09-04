import "dotenv/config";
import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV || "development";

async function dbConnect() {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

export default dbConnect;