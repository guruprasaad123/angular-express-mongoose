const express =require('express');
const path = require('path');
const app = new express();
const router = require('./routes/routes');
//const db = require('./db/db');
app.use('/api',router);

app.use('/',express.static(path.join(__dirname,'../dist','meanstack')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../dist','meanstack','index.html'));
});



app.listen(3000,()=>console.log('Listening on 3000'))