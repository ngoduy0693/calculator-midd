const calculation = require('./calculation');
var run = new calculation();

module.exports = async(context,next) => {
    context.does = run;
    await next();
}
