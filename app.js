var express = require('express'); 
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser'); 
require("dotenv").config();

var db = mongoose.connect(process.env.MONGO_CONNECTION_STRING); 

var app = express(); 
var Book = require('./models/bookModel'); 

var port = process.env.PORT || 3000; 
console.log(process.env.MONGO_CONNECTION_STRING); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  

var bookRouter = require('./Routes/bookRoutes')(Book); 

app.use('/api/books', bookRouter); 

app.get("/", function(req, res){
    res.send("welcome to my api"); 
});

app.listen(port, function(){
    console.log('App is running on ' + port); 
}); 