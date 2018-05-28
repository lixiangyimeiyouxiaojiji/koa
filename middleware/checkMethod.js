module.exports = async (ctx, next) => {
    console.log(ctx.request.method)
    //ctx.txt = 9;
    if(0){ 
       // ctx.response.redirect('/car/'+ctx.params.name);
        ctx.response.body = '<a href="/">Index Page</a>'
    }
    else next();
};
