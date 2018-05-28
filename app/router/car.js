var carService = require('../services/car')
var showCar = async (ctx, next) => {
    var name = ctx.params.name;
    name  = carService(name);
    ctx.response.body = `<h1>Car, ${name}!</h1>`;
};

module.exports = {
    'GET /car/:name': showCar
};