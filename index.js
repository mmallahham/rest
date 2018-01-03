var express = require('express');
var mongoose = require('mongoose');
var Book = require('./modules/bookmodel.js');


mongoose.connect('mongodb://localhost/test');

var app = express();

var PORT = process.env.PORT || 5000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function(req,res){
        Book.find(function(err,books){
            if(err)
                res.status(500).send(err);
            else
                console.log(books);
                res.json(books);
        });
      //  res.json({Name :'my first REST app'});
    });


app.use('/',bookRouter);

app.get('/',function(req,res){
    res.send('Welcome son!');
    console.log('the root was visited!!!!');
});

app.listen(PORT,function(){
    console.log('listening on port ' + PORT);
});