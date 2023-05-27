livingCreature = require("./livingcreature")
module.exports = class Grass extends livingCreature {
  mul() {

    this.multiply++; //this.chooseCell(0)
    var hox = this.chooseCell(0)
    var newCell = hox[Math.floor(Math.random()*hox.length)]
    if (this.multiply >= 8 && newCell) {
      var newGrass = new Grass(newCell[0], newCell[1], this.index);
      grassArr.push(newGrass);
      matrix[newCell[1]][newCell[0]] = this.index;
      this.multiply = 0;
    }
  }
}