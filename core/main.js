/*globals require, console */

var start = require('./start.js');
var Borg = require('DemoBorg/core/Borg.js');

var result = start.doSomething();
console.log('Starting...');
console.log(result);

console.log('Borg: ' + Borg.regenerate());
