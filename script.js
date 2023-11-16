// Complete logic of game inside this function 
const game = () => { 
    let playerScore = 0; 
    let computerScore = 0; 
    let moves = 0; 
  
  
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
  
                const movesLeft = document.querySelector('.movesleft'); 
                moves++; 
                movesLeft.innerText = `Moves Left: ${6-moves}`; 
                  
  
                const choiceNumber = Math.floor(Math.random()*3); 
                const computerChoice = computerOptions[choiceNumber]; 
  
                // Function to check who wins 
                winner(this.innerText,computerChoice) 
                  
                // Calling gameOver function after 6 moves 
                if(moves == 6){ 
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

        // changes player and cpu string to lower case to make values valid
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
        const victorySong = document.querySelector('.victoryMusic')
  
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
            result.innerText = 'You Won The Game';
            result.style.color = 'skyblue';
            victorySong.volume = 0.2;
            victorySong.play();
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Game'; 
            result.style.color = 'red'; 
        } 
        else if(playerScore === computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'Tie'; 
            result.style.color = 'grey'
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
        battleMusic.play()
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

