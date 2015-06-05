// importar mongoose
var mongoose =
	require('mongoose');

//creamos el esquema
var commentSchema = 
	new mongoose.Schema({
		body : String,
		author : String,
		upvotes : {type : Number, default: 0},
		post : {type : mongoose.Schema.Types.ObjectId,
			ref: 'post'}
	});

	//creo el modelo
	mongoose.model('comment', commentSchema);