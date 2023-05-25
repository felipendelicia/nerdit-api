import express from "express";
import dotenv from 'dotenv'
import path from "./config";

dotenv.config(path())

const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!");
  res.send("pong");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
