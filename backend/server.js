import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
connectDB();

import products from "./data/products.js";

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.status(200).json(product);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
