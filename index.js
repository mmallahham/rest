var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Welcome son!');
    console.log('the root was visited!!!!');
});

app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
});