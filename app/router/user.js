const check = require('../../middleware/checkMethod')
var fn_hello = async (ctx, next) => {
    check(ctx,next)
    var name = ctx.params.name;
    console.log(ctx.txt)
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};