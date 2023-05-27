livingCreature = require("./livingcreature")
module.exports = class EverythingEater extends livingCreature {
  constructor(x, y, index){
    super(x, y, index);
    this.countEat = 0
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
  move(){
    let emptyCells = this.chooseCell(0)
    let newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)]
    if(newCell){
      let newX = newCell[0]
      let newY = newCell[1]
      matrix[this.y][this.x] = 0
      matrix[newY][newX] = 3
      this.x = newX
      this.y = newY
    }
  }
  eat(){
    let grassN = this.chooseCell(1)
    console.log(grassN)
    let grassEaterN = this.chooseCell(2)
    console.log(grassEaterN)
    let all = grassN.concat(grassEaterN)
    let food = all[Math.floor(Math.random()*all.length)]
    if(food){
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      matrix[food[1]][food[0]] = 3
      this.x = newX
      this.y = newY
      this.countEat ++
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i,1)
          break
        }
      }
      for (var i in grassEatArr) {
        if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
          grassEatArr.splice(i,1)
          break
        }
      }
    }
    else if (this.countEat > 15){
      this.die()
    }
    else {
      this.move()
    }
  }
      
  die(){
    console.log("merav")
    matrix[this.y][this.x] = 0
    for (var i in everythingEaterArr) {
      if (this.x == everythingEaterArr[i].x && this.y == everythingEaterArr[i].y){
        everythingEaterArr.splice(i,1)
        break
      }
    }
  }
}