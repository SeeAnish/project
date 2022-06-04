const restaurantRoutes = require('./restaurants');
const constructorMethod = (app) => {
  app.use('/restaurants', restaurantRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;