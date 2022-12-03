const express = require("express");
const path = require("path");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("<p>ALOHA EXPRESS SERVER</p>");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(8000, () => {
  console.log(`listening on port ${port}...`);
});
