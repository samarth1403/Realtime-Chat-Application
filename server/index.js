import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyparser from "body-parser";
import morgan from "morgan";

const app = express();

//dotenv
dotenv.config();

//bodyparser Setup
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

//cors-setup
app.use(cors());

//For refreshing the token
// app.use(cookieParser());

//Using Morgan
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log(`Server Running on ${PORT}`);
});
