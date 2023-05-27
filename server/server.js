var express = require("express");
var app = express();
app.use(express.static("../client"));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.get("/", function (req, res) {
  res.redirect("index.html");
});
server.listen(3000, function () {
  console.log("Game is running on port 3000");
});

var Grass = require("./grass")
var Bomb = require("./bomb")
var GrassEater = require("./grassEater")
var EverythingEater = require("./predator")
var PredatorEater = require("./predatorEater")
var Worm = require("./worm")

 matrix = []
 grassArr = []
 grassEatArr = []
 everythingEaterArr = []
 bombArr = []
 predatorArr = []
 wormArr = []

function generateMatrix(){
  for (let i = 0; i < 30; i++) {
    matrix[i] = [];
    for (let j = 0; j < 30; j++) {
      matrix[i][j] = Math.round(Math.random()* 6)
    }
  }
}
generateMatrix()

function createObject(){
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y, 1)
        grassArr.push(gr)
      }
      else if (matrix[y][x] == 2) {
        let grassEater = new GrassEater(x, y, 2)
        grassEatArr.push(grassEater)
      }
      else if (matrix[y][x] == 3) {
        let everythingEater = new EverythingEater(x, y, 3)
        everythingEaterArr.push(everythingEater)
      }
      else if (matrix[y][x] == 4) {
        let bomb = new Bomb(x, y, 4)
        bombArr.push(bomb)
      }
      else if (matrix[y][x] == 5) {
        let predatorEater = new PredatorEater(x, y, 5)
        predatorArr.push(predatorEater)
      }
      else if (matrix[y][x] == 6) {
        let worm = new Worm(x, y, 6)
        wormArr.push(worm)
      }
    }
  }
}


createObject()
function game(){
  for (var i in grassArr) {
    grassArr[i].mul()
  }
  for (var i in grassEatArr) {
    grassEatArr[i].eat()
  }
  for (var i in everythingEaterArr) {
    everythingEaterArr[i].eat()
  }
  for (var i in bombArr) {
    bombArr[i].explode()
  }
  for (var i in predatorArr) {
    predatorArr[i].eat()
  }
  for (var i in wormArr) {
    wormArr[i].eat()
  }
  // console.log("asd", wormArr.length)
  io.emit("my_matrix", matrix);
}
setInterval(game, 500)