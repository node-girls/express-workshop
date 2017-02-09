
var mustacheExpress=require('mustache-express');
var fs = require('fs');
var express = require('express');
// express =express();

var app=express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname+'/views');
/*
app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
}); 

/* define the hander function , tell what
the server do , use th get(), pass the request and response*/
/*
app.get("/",function(req, res){
	res.send("the Server receive my request")
});

/*
	Add an end point see what happen
*/
/*
app.get("/rout",function(req, res){
	res.send("my routing");
})
*/
/*
	set static asset like html. css and js file in public folder
*/
app.use(express.static("public"));

var formidable = require('express-formidable');

app.use(formidable());// middleware to extract data from the server 

app.post("/create-post",function(req,res){
	fs.readFile(__dirname + "/data/posts.json",function(error,file){
		var parsedFile=JSON.parse(file);
		var date= Date.now();
		parsedFile[date]=req.fields.blogpost;

		fs.writeFile(__dirname + "/data/posts.json",JSON.stringify(parsedFile),function(error,file){
			res.json(parsedFile);			
		});	
	})
})

app.get("/get-posts",function(req,res){
	res.sendFile(__dirname + "/data/posts.json");
})

app.get("/about",function(req,res){
	res.send(`
			<!DOCTYPE html>
			<html>
				<head>
					<title> About </title>					
				</head>
				<body>
					<h1> About </h1>
					<p> ${req.url} : the request : ${req.method}</p>
				</body>
			</html>
		`);
})

app.get('/posts/:postId', function (req, res) {
	
	postId = req.params.postId;
	fs.readFile(__dirname + "/data/posts.json",function(error,file){
		var parsedFile = JSON.parse(file);
		var postData = parsedFile[postId];
		res.render("post",{ post : postData});
	});

    //res.send('post id: ' + req.params.postId);
});


app.listen(3000, function () {
	console.log("Server is listening on port 3000. Ready to accept requests!");
});