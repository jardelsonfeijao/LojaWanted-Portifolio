const express = require("express");
const app = express();
const path = require("path");
var __dirname = path.resolve();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : false}));

app.engine("html", require("ejs").renderFile);

app.get("/index2", function(req,res) {
  res.send("<h1>Olá mundo!</h1>");
});

app.get("/", function(req,res) {
   res.render(__dirname + "/views/html/home.html");    
});

app.post("/calculo", function(req,res) {
  var n1 = parseInt(req.body.n1);
  var n2 = parseInt(req.body.n2);

  let result = n1 + n2;

  res.render(__dirname + "/views/html/resultado.html", {resultado : result});
});


app.listen(process.env.port || 3000);