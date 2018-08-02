const express = require('express');
const app = express();


app.get('/',function(req,res){
	res.send('hello world');

})


app.get('/about',(req,res)=>{
	res.send({
		notice:"This is the about us section"
	});
})

app.get('/contact',(req,res)=>{
	res.send('<h2>Contact Details</h2>');
})

app.listen(3000,function(){
	console.log('Listening on port 3000');
})