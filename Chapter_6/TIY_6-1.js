class Player {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

let player1 = new Player(0, 0);
let player2 = new Player(5, 5);

player1.move(5, 5); //Should set new position to x:5, y:5
player2.move(10, 10); //Should set new position to x:15, y:15

console.log(player1.x, player1.y); //Output should be 5 5
console.log(player2.x, player2.y); //Output should be 15 15
