
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/Routes.mjs";
import userrouter from "./routes/user.routes.mjs";
import Contactrouter from "./routes/Contact.routes.mjs";
import AddBookRouter from "./routes/Add.Book.Routes.mjs";
import Reviewrouter from "./routes/ReviewRouter.mjs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongo DB connected");
  } catch (err) {
    console.log("error:", err);
  }
};
connectDB();
app.use(express.json());
app.use("/api/book", router);
app.use("/user", userrouter);

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/user", Contactrouter);
app.use("/user", AddBookRouter);
app.use("/user", Reviewrouter);


app.listen(port, () => {
  console.log("server startes", port);
});
