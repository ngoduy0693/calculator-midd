const Koa = require('koa');
const calculator = require('./calculatorMiddleware');
const numberFilterMiddleware = require('./operate/numberFilterMiddleware');
const operateFilterMiddleware = require('./operate/operateMiddleware');

const app = new Koa();

app.use(calculator);
app.use(numberFilterMiddleware);
app.use(operateFilterMiddleware);

app.listen(4001);