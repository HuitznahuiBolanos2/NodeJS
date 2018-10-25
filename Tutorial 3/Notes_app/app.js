console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2];

console.log('Command: ',command);
console.log('Yargs',yargs.argv);


if(command == 'add'){
	//console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
	//console.log(process.argv[3]);
}else if( command=='list'){
	//console.log('Listing all notes');
	notes.getAll();
}else if(command=='read'){
	//console.log('Reading a note');
	notes.readNote(argv.title);
}else if(command=='remove'){
	//console.log('Removing a note');
	notes.rmvNote(argv.title);
}else{
	console.log('Command not recognized');
}