//importando framework moongoose
var mongoose = require('mongoose');

//creando esquema
//un esquema es un modelo 
//de algo
var postSchema =
	new mongoose.Schema({
		title : String,
		link : String,
		upvotes : {type: Number, default: 0},
		comments : [{
			type: mongoose.Schema.Types.ObjectId, 
			ref='comment'}]
	});

//cargando el esquema en la base de datos
//o creando el modelo de la bd
mongoose.model('post', postSchema);