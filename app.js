const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const config = require('config')
const routerController = require('./middleware/routerController');
const check  = require('./middleware/checkMethod');
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname+'/public'));
app.use(main);
console.log(config)
// app.use(async ctx => {
//     if (ctx.request.accepts('json')) {
//         ctx.response.type = 'json';
//         ctx.response.body = { data: 'Hello World' };
        
//       } else if (ctx.request.accepts('xml')) {
//         ctx.response.type = 'xml';
//         ctx.response.body = '<data>Hello World</data>';
//       } else if (ctx.request.accepts('html')) {
//         ctx.response.type = 'html';
//         ctx.response.body = '<p>Hello World</p>';
//       } else {
//         ctx.response.type = 'text';
//         ctx.response.body = 'Hello World';
//       }
// });

app.use(routerController(__dirname+'/app/router'))
app.listen(config.port);
console.log(config.env + "环境启动服务：" + config.port)