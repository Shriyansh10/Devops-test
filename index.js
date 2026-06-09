const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running v7 (caddy added)",
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
    console.log("Received data:", req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
