const express = require('express');
const app = express();
const port = 4000;


// middlewares
//log middleware

app.use((req,res,next)=>{
	console.log(`${req.method}:${req.url}:${new Date()}`);
	next();
})



let products=[{id:1,name:'marker',price:10},{id:2,name:"pencil",price:5},{id:3,name:"compass",price:15}]
//route handler methods

app.get('/',function(req,res){
	res.send('hello world');

})

app.get('/products',(req,res)=>{
	res.send(products);
})


app.get('/about',(req,res)=>{
	res.send({
		notice:"This is the about us section"
	});
})

app.get('/contact',(req,res)=>{
	res.send('<h2>Contact Details</h2>');
})

app.listen(port,function(){
	console.log('Listening on port 4000');
})