var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post('/create-post', function (req, res) {
  console.log('/create-post');
  var newPost = JSON.stringify(req.body);
  console.log(newPost);

  fs.writeFile('data/posts.json', newPost, function(error){
    console.log("Error >>> ", error);
  });

  res.redirect('/');

});

app.get('/get-posts', function(req, res) {
  res.sendFile(path.join(__dirname + '/data/posts.json'));
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
