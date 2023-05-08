// var matrix = [
//   [1,1,2,0,0,3,2,1],
//   [2,1,1,1,4,0,0,0],
//   [1,3,1,1,0,0,1,0],
//   [1,1,0,0,3,2,1,1],
//   [2,1,1,1,0,0,0,1],
//   [0,0,0,1,1,2,1,1],
//   [0,0,1,4,3,1,2,1],
//   [0,1,2,0,1,1,1,1]
// ]
var matrix =[]
var side = 20

var grassArr = []
var grassEatArr = []
var everythingEaterArr = []
var bombArr = []
var predatorArr = []
  
function setup() {
  //this is for grasses and grassEaters
  for (let i = 0; i < 30; i++) {
    matrix[i] = [];
    for (let j = 0; j < 30; j++) {
      matrix[i][j] = Math.round(random(0, 2))
    }
  }
  
  // this generates random everythingEaters
  for (let i = Math.round(random(0, matrix.length)); i < matrix.length; i += Math.round(random(0, 9))) {
    for (let j = Math.round(random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(random(3, 9))) {
      matrix[i][j] = 3
    }
  }
  // this generates random bombs
  for (let i = Math.round(random(0, matrix.length)); i < matrix.length; i += Math.round(random(0, 9))) {
    for (let j = Math.round(random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(random(3, 9))) {
      matrix[i][j] = 4
    }
  }
  // this generates random predatorEaters
  for (let i = Math.round(random(0, matrix.length)); i < matrix.length; i += Math.round(random(0, 9))) {
    for (let j = Math.round(random(0, matrix[i].length)); j < matrix[i].length; j += Math.round(random(3, 9))) {
      matrix[i][j] = 5
    }
  }


  
  frameRate(5)
  createCanvas(matrix[0].length * side, matrix.length * side)
  background('#acacac')

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
    }
  }
}
  
function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
         fill("green")
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac")
      }
      else if (matrix[y][x] == 2) {
        fill("yellow")
      }
      else if (matrix[y][x] == 3) {
        fill("red")
      }
      else if (matrix[y][x] == 4) {
        fill("blue")
      }
      else if (matrix[y][x] == 5) {
        fill("black")
      }
      rect(x * side, y * side, side, side)
    }
  }
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
}