module.exports = app => {
  const Drivers = app.db.models.Drivers;
  app.get("/drivers", (req, res) => {
    Drivers.findAll({}).then(drivers => {
      res.json({ drivers: drivers });
    });
  });
};
