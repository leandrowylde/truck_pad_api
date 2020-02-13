module.exports = app => {
  app.get("/", (req, res) => {
    res.json({ api_status: "OK" });
  });
};
