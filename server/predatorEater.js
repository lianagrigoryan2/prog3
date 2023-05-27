livingCreature = require("./livingcreature")
module.exports = class PredatorEater extends livingCreature {
  constructor(x, y, index){
    super(x, y, index);
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
  move() {
    let emptyCells = this.chooseCell(0)
    let newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)]
    if (newCell) {
      let newX = newCell[0]
      let newY = newCell[1]
      matrix[this.y][this.x] = 0
      matrix[newY][newX] = 5
      this.x = newX
      this.y = newY
    }
  }

  eat() {
    let foods = this.chooseCell(3)
    let food = foods[Math.floor(Math.random()*foods.length)]
    if (food) {
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      matrix[food[1]][food[0]] = 5
      this.x = newX
      this.y = newY
      for (var i in everythingEaterArr) {
        if (newX == everythingEaterArr[i].x && newY == everythingEaterArr[i].y) {
          everythingEaterArr.splice(i, 1)
          break
        }
      }
    }
    else {
      this.move()
    }
  }
}