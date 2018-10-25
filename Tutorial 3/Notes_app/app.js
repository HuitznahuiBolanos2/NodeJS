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
	var note = notes.addNote(argv.title, argv.body);
	if(note!= undefined){
		notes.logNote(note);
	}else{
		console.log("No se pudo crear la Nota");
	}
	//console.log(process.argv[3]);
}else if( command=='list'){
	//console.log('Listing all notes');
	notes.getAll();
}else if(command=='read'){
	//console.log('Reading a note');
	var note = notes.readNote(argv.title);
	if(note != undefined){
		notes.logNote(note);
	}else{
		console.log('No hay notas con ese nombre');
	}
}else if(command=='remove'){
	//console.log('Removing a note');
	var removed = notes.rmvNote(argv.title);
	var message = removed ? 'Note removed' : 'No Note removed';
	console.log(message);
}else{
	console.log('Command not recognized');
}