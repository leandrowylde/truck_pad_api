module.exports = app => {
  const Truck = app.db.models.Truck;
  // console.log("Models => ", app.db.models);

  app
    .route("/trucks")
    .get((req, res) => {
      Truck.findAll({ include: { all: true, nested: true } })
        .then(result => {
          res.json({ trucks: result, count: result.length });
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Truck.create(req.body)
        .then(result => {
          res.status(201).json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
  app
    .route("/trucks/:id")
    .get((req, res) => {
      Truck.findOne({ where: req.params, include: { all: true, nested: true } })
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
      Truck.update(req.body, { where: req.params })
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
      Truck.destroy({ where: req.params })
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
