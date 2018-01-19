var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.static("public"));
var formidable = require('express-formidable');
app.use(formidable());



app.post("/create-post", function(req,res){
    fs.readFile(__dirname+'/data/posts.json', function (error, file) {
        let parcedFile = JSON.parse(file);
        parcedFile[Date.now()]=req.fields.blogpost;
        fs.writeFile(__dirname+'/data/posts.json', JSON.stringify(parcedFile), function(err) {
            return err;
        })
        })
    console.log(req.body);
    console.log(req.fields);
});
// console.log(req.fields);
// console.log(req.body);
app.listen(3000,function(){
console.log('Server is listenning on port 3000.Ready to accept requests!');
}
);