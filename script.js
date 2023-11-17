// Complete logic of game inside this function 
const game = () => { 
    let playerScore = 0; 
    let computerScore = 0; 
    let moves = 6; 
  
  
    // Function to  
    const playGame = () => { 
        const grassBtn = document.querySelector('.grass'); 
        const fireBtn = document.querySelector('.fire'); 
        const waterBtn = document.querySelector('.water'); 
        const playerOptions = [grassBtn,fireBtn,waterBtn]; 
        const computerOptions = ['grass','fire','water'] 
          
        // Function to start playing game 
        playerOptions.forEach(option => { 
            option.addEventListener('click',function(){ 
                // declares variable for movesLeft
                const movesLeft = document.querySelector('.movesleft'); 
                // decrements moves variable by 1
                moves--; 
                // sets movesLeft text to Moves Left:(the amount of moves left)
                movesLeft.innerText = `Moves Left: ${moves}`; 
                  
                // will get number from 0 to 2 and set it to choiceNumber variable
                const choiceNumber = Math.floor(Math.random()*3); 
                // will assign computerChoice to computerOption array and get the string from the array based on what number is randomly chosen
                const computerChoice = computerOptions[choiceNumber]; 
                // Function with the string of playerOptions and computerChoice as the arguments
                winner(this.innerText,computerChoice) 
                  
                // Calling gameOver function after 6 moves 
                if(moves == 0){ 
                    gameOver(playerOptions,movesLeft); 
                } 
            }) 
        }) 
          
    } 
  
    // Function to decide winner 
    const winner = (player,computer) => { 
        const result = document.querySelector('.result'); 
        const playerScoreBoard = document.querySelector('.p-count'); 
        const computerScoreBoard = document.querySelector('.c-count');

        // changes player and cpu option string to lower case to make values valid
        player = player.toLowerCase(); 
        computer = computer.toLowerCase(); 
        //checks if players choice and cpu's choice are the same
        if(player === computer){ 
            result.textContent = `You both chose the same type...that's awkward`
        } // checks if player chose grass and if cpu's options were fire or water and updates score accordingly if player won or not
        else if(player == 'grass'){ 
            if(computer == 'fire'){ 
                result.textContent = `Computer's Fire Type beat your Grass Type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
  
            }else if (computer == 'water'){ 
                result.textContent = 'Yep, Grass beats Water. You won this move!'
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'water'){ 
            if(computer == 'grass'){ 
                result.textContent = `Computer's Grass Type beat your Water Type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else if (computer == 'fire'){ 
                result.textContent = 'Yep, Water beats Fire. You won this move!'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'fire'){ 
            if(computer == 'water'){ 
                result.textContent = `Computer's Water Type beat your Fire Type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else if (computer == 'grass'){ 
                result.textContent = 'Yep, Fire beats Grass. You won this move!'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
    } 
  

    // Function to run when game is over 
    const gameOver = (playerOptions,movesLeft) => { 
  
        const chooseMove = document.querySelector('.move'); 
        const result = document.querySelector('.result'); 
        const restartBtn = document.querySelector('.restart');
        const victorySfx = document.querySelector('.victoryMusic')
        const loseSfx = document.querySelector('.loseMusic')
        const tieSfx = document.querySelector('.tieMusic')
  
        playerOptions.forEach(option => { 
            option.style.display = 'none'; 
        }) 

        // pauses battle music and removes the button on gave over
        battleMusic.pause()
        pauseMusic.remove()


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none'; 
  
        if(playerScore > computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Won The Battle!';
            result.style.color = 'navy';
            victorySfx.volume = 0.2;
            victorySfx.play();
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Battle :('; 
            result.style.color = 'darkred'; 
            loseSfx.volume = 0.2;
            loseSfx.play();
        } 
        else if(playerScore === computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'The score is tied...try again'; 
            result.style.color = 'black'
            tieSfx.volume = 0.2;
            tieSfx.play();
        } 
        restartBtn.innerText = 'Restart'; 
        restartBtn.style.display = 'flex'
        restartBtn.style.color = 'white'
        restartBtn.addEventListener('click',() => { 
            window.location.reload(); 
        }) 
    } 
  
    const battleMusic = document.querySelector(".battleMusic");
    const pauseMusic = document.querySelector(".battleMusicBtn")
  
    window.addEventListener("DOMContentLoaded", () => {
        battleMusic.volume = 0.08;
        // battleMusic.play()
        battleMusic.loop = true
      });
    
    pauseMusic.addEventListener("click", () => {
        if (battleMusic.paused) {
          battleMusic.volume = 0.08;
          battleMusic.play();
          
        } else if (battleMusic.play){
          battleMusic.pause();
        }

      });

    // Calling playGame function inside game 
    playGame(); 
      
} 
  
// Calling the game function 
game();

