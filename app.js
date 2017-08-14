const express = require("express");
const morgan  = require("morgan");
const path    = require("path");

const app = express();

app.use(morgan("short"));

app.use(express.static(path.join(__dirname, "static")));

app.use((req, res) => {
  res.status(404).send("File not found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
