const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api' , apiRouter);


//app.get('/' , (req,res)=>{
//    res.send('hola desde el index')
//})

app.listen(3000, ()=>{
    console.log('server up');
})