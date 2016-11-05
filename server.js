console.log("Node is good!!")
const express = require('express');
const app = express();

app.listen(3000, function(){
	console.log('listening on 3000')
})

app.get('/', (req, res) => {
	//res.send('Hello World')
	res.sendFile(__dirname + '/index.html')
	console.log('__dirname : ' + __dirname)
})