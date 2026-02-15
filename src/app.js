const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello DevOps!" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

module.exports = app;
