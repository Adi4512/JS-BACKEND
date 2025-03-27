require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5147;
app.get("/", (req, res) => {
  res.send("hello world from aditya");
});

app.listen(port, () => {
  console.log(`port is listening at:${port}`);
});
