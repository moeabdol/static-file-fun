const express = require("express");
const morgan  = require("morgan");
const path    = require("path");
const fs      = require("fs");

const app = express();

app.use(morgan("short"));

app.use((req, res, next) => {
  const filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404).send("File not found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
