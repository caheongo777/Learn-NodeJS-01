const express = require('express')
const app = express();
const port = 7777;

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req,res){
	res.send('<h1>click me</h1>') 
} )

app.get('/fish', function(req,res){
	res.send('<h1>i am fish</h1>')  	

} )


app.listen(port, function() { console.log('name port '+ port)

});
