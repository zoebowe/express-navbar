const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/zoebowe/Climate-Crisis");
});

app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/zoebowe/typesetting");
});

app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/zoebowe/four-sorting-algo-phase-1");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
