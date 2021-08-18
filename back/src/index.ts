import express from 'express';
import { connect, connection } from 'mongoose'

const server = express()//Route
server.get('/',function(req,res){
	res.send('hello Céline')
})//MongoDB connection
connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
connection.once('open',function(){
	console.log('Database connected Successfully');
}).on('error',function(err){
	console.log('Error', err);
}); //Server
server.listen(27017, function() {
	console.log('Server is Up')
});