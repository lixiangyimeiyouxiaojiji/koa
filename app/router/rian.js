
//const fs = require('fs')
var rain = async (ctx, next) => {
    ctx.response.type = 'html';
    //ctx.response.body = await fs.createReadStream('../../../public/html/rain.html');
};

module.exports = {
    'GET /rain': rain
};