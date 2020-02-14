module.exports = app => {
  const Driver = app.db.models.Driver;
  const Freight = app.db.models.Freight;
  // console.log("Models => ", app.db.models);

  app
    .route("/drivers")
    .get((req, res) => {
      let query = {};
      Object.keys(req.query).forEach(key => {
        switch (key) {
          case "has_own_vehicle":
            Object.assign(query, { has_own_vehicle: req.query[key] });
            break;
        }
      });
      Driver.findAll({
        where: query,
        include: [
          {
            model: Freight
          }
        ]
      })
        .then(result => {
          res.json({ drivers: result, count: result.length });
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Driver.create(req.body)
        .then(result => {
          res.status(201).json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
  app
    .route("/drivers/:id")
    .get((req, res) => {
      Driver.findOne({
        where: req.params,
        include: [
          {
            model: Freight
          }
        ]
      })
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
      Driver.update(req.body, { where: req.params })
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
      Driver.destroy({ where: req.params })
        .then(result => {
          console.log(result);
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
