console.log("Node is good!!")
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

const MongoClient = require('mongodb').MongoClient
////////////////////////////////////////////////////////

var db;
MongoClient.connect('mongodb://sai:sai@ds145677.mlab.com:45677/inspirational-quotes', (err, database) => {
	if(err) return console.log(err)
	db = database
	
	app.listen(3000, function(){
		console.log('listening on 3000')
	})

})



app.get('/', (req, res) => {
	//res.send('Hello World')
	console.log('__dirname : ' + __dirname)
	res.sendFile(__dirname + '/index.html')
	db.collection('quotes').find().toArray(function(err, results){
		console.log(results)
	})
})

app.post('/quotes', (req, res) => {
	console.log(req.body)
	db.collection('quotes').save(req.body, (err, result) => {
		if(err) return console.log(err)
		console.log("Saved To Database!!")
		res.redirect('/')
	})
})



