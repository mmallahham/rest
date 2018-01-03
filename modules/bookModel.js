var mongoose = require('mongoose');

var bookModel = new mongoose.Schema({
    title: {type: String},
    auther: {type: String},
    genre: {type:String},
    read: {type:Boolean, default:false}
});

module.exports = mongoose.model('Book',bookModel);