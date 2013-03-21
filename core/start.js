/*globals require, module */

var service = require('./Service.js');

function doSomething() {
    return 'didDoSomething: ' + service.serve();
};

module.exports = {
    doSomething: doSomething
};

