const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/ymple',(err,client) => {

	if(err){
		return console.log('Imosible de conectar');
	}
	console.log('conectado');

	const db = client.db('ymple');

	var org = {
		nombre:'',
		telefono: ,
		correo: '',
		descripcion: '',
		mision: '',
		numArt: ,
		Artists: [],
		url: '',
		imgs = [],
		logo = ''
	}

	

	console.log(org.Artists);

	db.collection('orgs').insertOne(org, (err,result)=>{
		if(err){
			console.log('Imposible de insertar objeto');
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	client.close();
});