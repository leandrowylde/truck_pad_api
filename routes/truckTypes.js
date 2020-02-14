module.exports = app => {
  const TruckType = app.db.models.TruckType;
  // console.log("Models => ", app.db.models);

  app
    .route("/truck_types")
    .get((req, res) => {
      TruckType.findAll({})
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      TruckType.create(req.body)
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
  app
    .route("/truck_types/:id")
    .get((req, res) => {
      TruckType.findOne({ where: req.params })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      TruckType.update(req.body, { where: req.params })
        .then(result => {
          if (result[0] === 1) {
            res.sendStatus(204);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      TruckType.destroy({ where: req.params })
        .then(result => {
          if (result === 1) {
            res.sendStatus(204);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
