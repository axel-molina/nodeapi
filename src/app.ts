import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => {
  console.log("MongoDB connected");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Note:  throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))
// Solution:  export { router } in all routes files;
