livingCreature = require("./livingcreature")
module.exports = class GrassEater extends livingCreature {
  constructor(x, y, index){
    super(x, y, index);
    this.energy = 8;
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
  mul() {
    var xot = this.chooseCell(1)
    var newCell = xot[Math.floor(Math.random()*xot.length)]
    if (newCell) {
      var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index)
      grassEatArr.push(newGrassEater)
      matrix[newCell[1]][newCell[0]] = 2
      this.energy = 8;
    }
  }
  move(){
    this.energy --;
    let emptyCells = this.chooseCell(0)
    let newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)]
    if(newCell){
      let newX = newCell[0]
      let newY = newCell[1]
      matrix[this.y][this.x] = 0
      matrix[newY][newX] = 2
      this.x = newX
      this.y = newY
    }
    if (this.energy == 0){
      this.die()
    }
  }
  eat(){
    let foods = this.chooseCell(1)
    let food = foods[Math.floor(Math.random()*foods.length)]
    if(food){
      this.energy++;
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      console.log(matrix[food[1]][food[0]])
      matrix[food[1]][food[0]] = 2
      this.x = newX
      this.y = newY
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i,1)
          break;
        }
      }
      if(this.energy >= 12){
        this.mul()
      }
    } 
    else{
      this.move()
    }
  }
  die(){
    console.log("merav")
    matrix[this.y][this.x] = 0
    for (var i in grassEatArr) {
      if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
        grassEatArr.splice(i,1)
        break
      }
    }
  }
}