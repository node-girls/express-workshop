var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/get-posts', function(req, res) {
  res.sendFile(__dirname + '/data/posts.json');
});

app.post('/create-post', function (req, res) {

  fs.readFile(__dirname + '/data/posts.json', function (error, file) {

  var parsedFile = JSON.parse(file);
  parsedFile[Date.now()] = req.body.blogpost;
  var stringifiedFile = JSON.stringify(parsedFile, null, 4)

  fs.writeFile('data/posts.json', stringifiedFile, function (error) {
    if (error) {
      console.log("Error >>> ", error);
    }
    res.redirect('/');
    });
  });
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
