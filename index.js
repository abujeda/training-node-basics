var chalk = require('chalk');
var logger = require('./libs/logger')

const singleton = require('./libs/singleton.js');
console.log(singleton.instance());

console.log(chalk.yellow('hello world'));

console.log(logger);
