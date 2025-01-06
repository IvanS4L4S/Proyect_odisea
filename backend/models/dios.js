const mongoose = require('mongoose');
const {Schema} = mongoose;
const DiosSchema = new Schema({
    id: {type: Number, required: true}, 
    nombres_alternativos: {type: String, required: true}, 
    nombre: {type:String, required: true}, 
    descripcion: {type:String, required:true}, 
    imagen_url: {type: String, required: true},
    fk_panteon: {type: Schema.Types.ObjectId, ref:'Panteon', required: true}
})
module.exports = mongoose.models.Dios || mongoose.model('Dios', DiosSchema);

		
		