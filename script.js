const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


// map();
let newMap = new Image();
newMap.src = 'MainMenuMap/lowpolyslope map.PNG';

function drawImage(src, x, y, w, h) {
        // const mainMap = document.getElementById("MainMenuMap");
        context.drawImage(src, x, y, w, h);
      };



// delcares and defines variables for the position x and y, as well as the distance x left/x right and y Up/ y Down  of the character
let posX = 425;
let posY = 425;
let disXL = 0;
let disXR = 0;
let disYUp = 0;
let disYDown = 0;

//creates function for movement ( 25 25 is size of box )
function move(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(posX, posY, 25, 25)
    // makes iterates the position by the distance you want to move and updates it
    posX += disXR
    posX +=disXL
    posY += disYUp
    posY += disYDown
    // updates movement every frame
    requestAnimationFrame(move)
}
//calls movement function
move()


///// START OF KEYBINDS //////



addEventListener("keydown", (evt) => {
    /// sets value to disXL/disXR and disYUp/disYDown for W.A.S.D. movement keys when pressed down 
    if (evt.code == `KeyW`){ disYUp = -5; }
    if (evt.code == `KeyA`){ disXL = -5; }
    if (evt.code == `KeyS`){ disYDown = 5; }
    if (evt.code == `KeyD`){ disXR = 5; }
    /// sets value to (key name here) keys when pressed down 
})

/// set value back for disXL/disXR and disYUp/disYDown back to 0 for W.A.S.D. movement keys when key is released

addEventListener("keyup", (evt) => {
    if (evt.code == `KeyW`){ disYUp = 0; }
    if (evt.code == `KeyA`){ disXL = 0; }
    if (evt.code == `KeyS`){ disYDown = 0; }
    if (evt.code == `KeyD`){ disXR = 0; }
})



//// END OF KEYBINDS////


//  Class representing a Player in the game
 
class Player {

    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
 
    
    //   Method to attack another player.//
     
    attack(target) {
        console.log(`${this.name} is attacking ${target.name}`);
        // Perform attack logic here
    }
 
 
    //  * Method to take damage from an attack.
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage. Health: ${this.health}`);
    // Check if player is defeated
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated.`);
        }
    }
}

// Create players
const player1 = new Player("Player 1", 100);
const player2 = new Player("Player 2", 100);
const player3 = new Player("Player 3", 100);
 

//   Class representing the game.
 
class Game {

//  Constructor for the Game class.

    constructor(players) {
        this.players = players;
    }
 

    //  Method to start the game.

    startGame() {
        console.log("Starting game...");
        // Game logic goes here
    }
 
    
    //  Method to end the game.
     
    endGame() {
        console.log("Ending game...");
        // Game cleanup logic goes here
    }
}
 
// Create game with players
const game = new Game([player1, player2, player3]);
 
// Start the game
game.startGame();
 
// Perform game actions (e.g., player attacks)
player1.attack(player2);
player2.attack(player3);
 
// End the game
game.endGame();
