const express =require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = new express();
const dotenv = require('dotenv');
const router = require('./routes/routes');
const connect = require('./db/db');

connect();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api',router);

dotenv.load({ path: '.env' });

app.use('/',express.static(path.join(__dirname,'../dist','meanstack')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../dist','meanstack','index.html'));
});

//app.use(express.bodyParser())
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//app.use(express.json()); // for parsing application/json
//app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



//app.use(bodyParser.json({ type: 'application/*+json' }))

app.listen(3000,()=>console.log('Listening on 3000'))