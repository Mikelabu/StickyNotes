var express = require('express'); //these are the packages we need to be using
const path = require('path'); //another package




var app = express();
var port = process.env.PORT || 3000; //use the specified port (variable that heroku looks for), or 3000

app.use(express.static(__dirname + '')); //this is where the static (Frontend) files eg css (dirname is wherever it is right now)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html')); //this is where to look for the html file
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!'); //first line of code run after root is set up
});
