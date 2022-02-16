const express = require('express');

const app = express();

app.use('/users',(req,res,next)=> {
    console.log('Hi!!!!');
    res.send('<p>Users page</p>')
});

app.use('/',(req,res,next)=> {
    console.log('Second one');
    res.send('<h1>The !</h1>');
});

app.listen(4000);