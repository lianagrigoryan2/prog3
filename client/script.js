var socket= io()
socket.on('my_matrix', my_draw)
function setup(){
  frameRate(60)
  createCanvas(900,900)
  background('#acacac')
}

function my_draw(matrix) {
  console.log(matrix)
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
        fill("black")
      }
      else if (matrix[y][x] == 5) {
        fill("blue")
      }
      else if (matrix[y][x] == 6) {
        fill(200, 122, 173)
      }
      rect(x * 50, y * 50, 50, 50)
    }
  }
}