livingCreature = require("./livingcreature")
module.exports = class Worm extends livingCreature {
  move(){
    let emptyCells = this.chooseCell(0)
    let newCell = emptyCells[Math.floor(Math.random()*emptyCells.length)]
    if(newCell){
      let newX = newCell[0]
      let newY = newCell[1]
      matrix[this.y][this.x] = 0
      matrix[newY][newX] = 6
      this.x = newX
      this.y = newY
    }
  }
  eat(){
    let foods = this.chooseCell(5)
    let food = foods[Math.floor(Math.random()*foods.length)]
    if(food){
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      matrix[food[1]][food[0]] = 6
      this.x = newX
      this.y = newY
      for (var i in bombArr) {
        if (newX == bombArr[i].x && newY == bombArr[i].y) {
          bombArr.splice(i,1)
          break;
        }
      }
    }
    else{
      this.move()
    }
  }
}