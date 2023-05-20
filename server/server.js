var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
  res.redirect("index.html");
});
app.listen(3000, function () {
  console.log("Game is running on port 3000");
});


var Grass = require("./grass")
var Bomb = require("./bomb")
var GrassEater = require("./grassEater")
var EverythingEater = require("./predator")
var PredatorEater = require("./predatorEater")

matrix = []

function generateMatrix(){
  for (let i = 0; i < 30; i++) {
    matrix[i] = [];
    for (let j = 0; j < 30; j++) {
      matrix[i][j] = Math.round(Math.random(0, 2))
    }
  }
  for (let i = Math.round(Math.random(0, matrix.length)); i < matrix.length; i += Math.round(Math.random(0, 9))) {
    for (let j = Math.round(Math.random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(Math.random(3, 9))) {
      matrix[i][j] = 3
    }
  }
  for (let i = Math.round(Math.random(0, matrix.length)); i < matrix.length; i += Math.round(Math.random(0, 9))) {
    for (let j = Math.round(Math.random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(Math.random(3, 9))) {
      matrix[i][j] = 4
    }
  }
  for (let i = Math.round(Math.random(0, matrix.length)); i < matrix.length; i += Math.round(Math.random(0, 9))) {
    for (let j = Math.round(Math.random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(Math.random(3, 9))) {
      matrix[i][j] = 5
    }
  }
}

generateMatrix()
console.log(matrix)