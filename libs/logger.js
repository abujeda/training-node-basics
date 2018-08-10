const singleton = require('./singleton.js');
console.log(singleton.instance());
singleton.update(20);
console.log(singleton.instance());
