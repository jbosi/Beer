const express = require('express')
const mongoose = require('mongoose')

var app = express()//Route
app.get('/',function(req,res){
	res.send('hello Céline')
})//MongoDB connection
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',function(){
	console.log('Database connected Successfully');
}).on('error',function(err){
	console.log('Error', err);
}); //Server
app.listen(27017, function() {
	console.log('Server is Up')
});