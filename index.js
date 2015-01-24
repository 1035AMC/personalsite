var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var multer = require('multer'); 
var fs= require("fs");


//configure app
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/pdf'));
app.use(express.static(__dirname+"/fonts"));

app.use(express.static(__dirname));


//use middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer()); // for parsing multipart/form-data

Todo = [{
            id: 1,
            desc: "foo"
        }, {
            id: 2,
            desc: "bar"
        }, {
            id: 3,
            desc: "baz"
        }]
//define routes


app.get("/", function(req, res) {
    res.render('index');
});



app.post("/add",function(req,res){
	var newItem= req.body.newItem;
    Todo.push({id: Todo.length+1,
        desc:newItem}
    );
    res.redirect("/");
});

app.listen(5000, function() {
    console.log("Listening on port 5000");
});
