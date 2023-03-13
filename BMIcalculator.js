const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", function (req, res) {

  var kile = Number(parseFloat(req.body.kile));
  var metri = Number(parseFloat(req.body.metri));
  
  var n = kile / (metri * metri);
  
    res.send("Your BMI index is: " + n.toFixed(2));
  });

app.listen(3000, function () {
  console.log("Server  is running on port 3000!");
});

