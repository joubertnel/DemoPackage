/*globals module */

var callCount = 0;

function serve() {
    callCount = callCount + 1;
    return 'didServe';
};


module.exports = {
    serve: serve
};


