/* Create a new class called Follower that extends from Actor and takes
three constructor parameters: startX, startY, and player Pass the startX
and startY parameters to the superclass’s constructor, as we did in the
Player class, and save the player parameter as a property on the object,
as we did with the Player class’s hp property Assume that in this game, a
follower can’t be attacked, so it doesn’t need hit points, and it also can’t
attack What it can do is follow the player assigned to its player prop-
erty To do this, create a follow method that updates the follower’s x- and
y- coordinates to match those of its player property */

class Actor {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    distanceTo(otherActor) {
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor {
    constructor(startX, startY) {
        super(startX, startY);
        this.hp = 100;
    }
}

// Class that inherits properties from the actor class
class Follower extends Actor {
    constructor(startX, startY, player) {
        super(startX, startY)
        this.player = player
    }
    // Method that updates follower coordinates to the player position
    follow() {
        this.x = this.player.x
        this.y = this.player.y
    }
}

let player = new Actor(0, 0);
let follower = new Follower(0, 0, player);

player.move(2, 2)  // Should change player position to x:2 and y:2
follower.follow() 

console.log(player.x, player.y);
console.log(follower.x, follower.y) // Should also be the same as the players position