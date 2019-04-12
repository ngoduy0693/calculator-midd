const sphinxDivision = require('@sphinx-software/division-operator/index');

function createShinxDivision() {
    let shpinxDiv = new sphinxDivision(false);
        shpinxDiv.setMessageWhenFailed('Division by zero !!!');
        return shpinxDiv;
}

class Div {

    constructor() {
        this.shpinxDiv = new createShinxDivision();
    }

    operate(numberA,numberB) {
        return this.shpinxDiv.runDivide(numberA, numberB);
    }
}
module.exports = Div;