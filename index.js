import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ api_status: "API OK" });
});

app.listen(PORT, () => {
  console.log(`API started at http://localhost:${PORT}`);
});
