module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`API Started at http://localhost:${app.get("port")}`);
    });
  });
};
