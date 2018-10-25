console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//console.log(_.isString('true'));
var array = _.uniq(['Andrew',9,'Huitz',9,0,2,3,1,1,'Huitz','huitz']);
console.log(array);


//var res = notes.add(1,-5);

//console.log(res);

/*
var user = os.userInfo();

//console.log(user.username);
fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);
*/