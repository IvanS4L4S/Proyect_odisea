const mongoose = require('mongoose');
const {Schema} = mongoose;

const PanteonSchema = new Schema({
    id: {type: Number, required: true}, 
    nombre: {type:String, required: true}, 
    detalle: {type:String, required:true}, 
    imagen_url: {type: String, required: false}
})
module.exports = mongoose.models.Panteon || mongoose.model('Panteon', PanteonSchema);
