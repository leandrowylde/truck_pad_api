module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`API Started at http://localhost:${app.get("port")}`);
  });
};
