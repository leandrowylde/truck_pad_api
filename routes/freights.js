import Sequelize from "sequelize";
import _ from "lodash";

module.exports = app => {
  const Freight = app.db.models.Freight;
  const Driver = app.db.models.Driver;
  const Truck = app.db.models.Truck;
  const Op = Sequelize.Op;
  // console.log("Models => ", app.db.models);

  app
    .route("/freights")
    .get((req, res) => {
      let query = {};
      let grouped = false;
      Object.keys(req.query).forEach(key => {
        switch (key) {
          case "has_load_to_origin":
            Object.assign(query, { has_load_to_origin: req.query[key] });
            break;
          case "period":
            let [startDate, endDate] = req.query.period.split("-");
            let [startDay, startMonth, startYear] = startDate.split("/");
            let [endDay, endMonth, endYear] = endDate.split("/");
            Object.assign(query, {
              check_in_date: {
                [Op.gte]: `${startYear}-${startMonth}-${startDay}`,
                [Op.lte]: `${endYear}-${endMonth}-${endDay}`
              }
            });
            break;
          case "grouped_by_truck_type":
            req.query[key] === "true" ? (grouped = true) : (grouped = false);
            break;
        }
      });
      Freight.findAll({
        where: query,
        include: [
          {
            all: true,
            nested: true
          }
        ]
      })
        .then(result => {
          // console.log(JSON.stringify(result));
          if (grouped) {
            let grouped = _.groupBy(result, "truck.truck_type.truck_type");
            res.json(grouped);
          } else {
            res.json({ freights: result, count: result.length });
          }
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .post((req, res) => {
      Freight.create(req.body)
        .then(result => {
          res.status(201).json(result);
        })
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
  app
    .route("/freights/:id")
    .get((req, res) => {
      Freight.findOne({ where: req.params })
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
      Freight.update(req.body, { where: req.params })
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
      Freight.destroy({ where: req.params })
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
