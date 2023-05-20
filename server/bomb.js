livingCreature = require("./livingcreature")
module.exports = class Bomb extends livingCreature {
  constructor(x, y, index){
    super(x, y, index);;
  }
  getNewCoordinates() {
    this.directions = [
    [this.x - 1, this.y - 1],
    [this.x, this.y - 1],
    [this.x + 1, this.y - 1],
    [this.x - 1, this.y],
    [this.x + 1, this.y],
    [this.x - 1, this.y + 1],
    [this.x, this.y + 1],
    [this.x + 1, this.y + 1]
    ];
  }
  chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
  }
  explode() {
    var neighbor1 = this.chooseCell(1)
    var neighbor2 = this.chooseCell(2)
    var neighbor3 = this.chooseCell(3)
    var neighbor4 = this.chooseCell(4)
    var all = neighbor1.concat(neighbor2).concat(neighbor3).concat(neighbor4)
    let neighbors = random(all)
    if (neighbors) {
      console.log("paytec")
      matrix[neighbors[1]][neighbors[0]] = 0
      matrix[this.y][this.x] = 0
      for (var i in bombArr) {
        if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
          bombArr.splice(i, 1)
          break
        }
      }
      for (var i in grassEatArr) {
        if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
          grassEatArrArr.splice(i, 1)
          break
        }
      }
      for (var i in everythingEaterArr) {
        if (this.x == everythingEaterArr[i].x && this.y == everythingEaterArr[i].y) {
          everythingEaterArr.splice(i, 1)
          break
        }
      }
    }
  }
}




// class Bomb {
//   constructor(x, y, index) {
//     this.x = x
//     this.y = y
//     this.index = index
//     this.directions = [
//       [this.x - 1, this.y - 1],
//       [this.x, this.y - 1],
//       [this.x + 1, this.y - 1],
//       [this.x - 1, this.y],
//       [this.x + 1, this.y],
//       [this.x - 1, this.y + 1],
//       [this.x, this.y + 1],
//       [this.x + 1, this.y + 1]
//     ]
//   }

//   chooseCell(character) {
//     var found = []
//     for (var i in this.directions) {
//       var x = this.directions[i][0]
//       var y = this.directions[i][1]
//       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//         if (matrix[y][x] == character) {
//           found.push(this.directions[i])
//         }
//       }
//     }
//     return found
//   }

//   explode() {
//     var neighbor1 = this.chooseCell(1)
//     var neighbor2 = this.chooseCell(2)
//     var neighbor3 = this.chooseCell(3)
//     var neighbor4 = this.chooseCell(4)
//     var all = neighbor1.concat(neighbor2).concat(neighbor3).concat(neighbor4)
//     let neighbors = random(all)
//     if (neighbors) {
//       console.log("paytec")
//       matrix[neighbors[1]][neighbors[0]] = 0
//       matrix[this.y][this.x] = 0

//       for (var i in bombArr) {
//         if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
//           bombArr.splice(i, 1)
//           break
//         }
//       }
//       for (var i in grassEatArr) {
//         if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
//           grassEatArrArr.splice(i, 1)
//           break
//         }
//       }
//       for (var i in everythingEaterArr) {
//         if (this.x == everythingEaterArr[i].x && this.y == everythingEaterArr[i].y) {
//           everythingEaterArr.splice(i, 1)
//           break
//         }
//       }
      

//     }
//   }
// }