const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = app;
