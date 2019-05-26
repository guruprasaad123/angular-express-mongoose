const mongoose = require('mongoose');

function connect()
{
mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true}
 ).then(()=>console.log('connected to DB')).catch((err)=>console.log('Couldnt connect :' ,err));
}

module.exports = connect;
