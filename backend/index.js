var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('El servidor empezo en el puerto ', app.get('port')); 
});