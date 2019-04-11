module.exports = async (context, next) => {

    const numberA = Number(context.query.numberA);
    const numberB = Number(context.query.numberB);
    const operate = context.query.operate;
    if (numberA, numberB, operate) {
        context.numberA = numberA;
        context.numberB = numberB;
        context.operate = operate;
        await next();
    } else {
        context.body = {
            Calculator : 'Missing value!'
        }
    }
};
