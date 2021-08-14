var express = require('express'); //these are the packages we need to be using
const path = require('path'); //another package
const xlsxFile = require('read-excel-file/node') // package used for reading excel files


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + ''));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});

var data; // 2D array with excel file data
var scenarios; // Dictionary (map) of different scenarios and options:

// Converts excel file into 2D array:
xlsxFile('./household-expenditure-statistics-year-ended-june-2019.xlsx').then((rows) => {
    data = rows;
    scenarios =
    {
        transport : {
            description : "You are going to school. What option do you choose?",
            stat : "The average household weekly expenditure on transport is $20.50",
            options : [
                {
                    description : "Take the train."
                },
                {
                    description : "Take the car."
                }
            ]
        }
    };
})