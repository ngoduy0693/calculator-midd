module.exports = async (context) => {
    
    let result      = context.does.do(context.operate, context.numberA, context.numberB);
    context.body    = {
        result : result
    }
}