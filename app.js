const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Backend!");
});

app.get("/user", (req, res) => {
  res.send("I am Yash");
});

app.listen(port, () => {
  console.log(`Welcome to the Backend !: ${port}`);
});
