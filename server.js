const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(formidable());

app.get('/get-posts', function (req, res) {
    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
        const parsedFile = JSON.parse(file);
        res.send(JSON.stringify(parsedFile));
    });
});

app.post('/create-post', function (req, res) {
    const dateNow = Date.now();
    const newData = {
        [dateNow]: req.fields.blogpost
    };
    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
        const parsedFile = JSON.parse(file);
        const allData = { ...parsedFile, ...newData };
        fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(allData), function (error) {
            if (!error) {
                res.send('OK');
                console.log('ok');
            }
            else {
                res.send(error);
                console.log(error);
            };
        });
    });

});

app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
});