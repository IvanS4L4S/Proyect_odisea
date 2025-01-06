// const mongoose = require('mongoose');

// const connectMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('🔥 MongoDB connected');
//   } catch (error) {
//     console.error(error);
//     throw new Error('⚠️ could not connect to mongoDB');
//   }
// };

// module.exports = { connectMongo };
const mongoose =require( 'mongoose' ) ;
const URI = 'mongodb://localhost/proyectodb' ;
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;
