
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

map();

function map()
{
  mapImg = new Image();
  mapImg.src = "MainMenuMap/lowpolyslope map.PNG";
  mapImg.onload = function(){
    context.drawImage(mapImg, 1000, 1000);
  }
}


// delcares and defines variables for the position x and y, as well as the distance x left/x right and y Up/ y Down  of the character
let posX = 0;
let posY = 0;
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

/// sets value to disX and disY for W.A.S.D. movement keys when pressed down 

addEventListener("keydown", (evt) => {
    if (evt.code == `KeyW`){ disYUp = -2; }
    if (evt.code == `KeyA`){ disXL = -2; }
    if (evt.code == `KeyS`){ disYDown = 2; }
    if (evt.code == `KeyD`){ disXR = 2; }
})

// addEventListener("keydown", (evt) => {
//     if (evt.code == `KeyA`){
//         disX = -2;
//     }
// })

// addEventListener("keydown", (evt) => {
//     if (evt.code == `KeyS`){
//         disY = 2;
//     }
// })

// addEventListener("keydown", (evt) => {
//     if (evt.code == `KeyD`){
//         disX = 2;
//     }
// })

/// set value back for disX and disY back to 0 for W.A.S.D. movement keys when key is released

addEventListener("keyup", (evt) => {
    if (evt.code == `KeyW`){ disYUp = 0; }
    if (evt.code == `KeyA`){ disXL = 0; }
    if (evt.code == `KeyS`){ disYDown = 0; }
    if (evt.code == `KeyD`){ disXR = 0; }
})


// addEventListener("keyup", (evt) => {
//     if (evt.code == `KeyW`){
//         disY = 0;
//     }
// })

// addEventListener("keyup", (evt) => {
//     if (evt.code == `KeyA`){
//         disX = 0;
//     }
// })

// addEventListener("keyup", (evt) => {
//     if (evt.code == `KeyS`){
//         disY = 0;
//     }
// })

// addEventListener("keyup", (evt) => {
//     if (evt.code == `KeyD`){
//         disX = 0;
//     }
// })

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
 

//   Class representing the game.
 
class BattleRoyaleGame {

//  Constructor for the BattleRoyaleGame class.

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
 
// Usage Example for Battle Royale Game
 
// Create players
const player1 = new Player("Player 1", 100);
const player2 = new Player("Player 2", 100);
const player3 = new Player("Player 3", 100);
 
// Create game with players
const game = new BattleRoyaleGame([player1, player2, player3]);
 
// Start the game
game.startGame();
 
// Perform game actions (e.g., player attacks)
player1.attack(player2);
player2.attack(player3);
 
// End the game
game.endGame();
