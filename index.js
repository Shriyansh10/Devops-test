const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running v6 (post added)",
    owner: "Shriyansh Agarwal",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.post("/data", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
