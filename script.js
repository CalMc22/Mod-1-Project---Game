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
        player = player.toLowerCase(); 
        computer = computer.toLowerCase(); 
        if(player === computer){ 
            result.textContent = `You both chose the same type...that's awkward`
        } 
        else if(player == 'grass'){ 
            if(computer == 'fire'){ 
                result.textContent = `Computer's fire type beat your grass type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
  
            }else{ 
                result.textContent = 'Player Won'
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'water'){ 
            if(computer == 'grass'){ 
                result.textContent = `Computer's grass type beat your water type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = 'Player Won'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'fire'){ 
            if(computer == 'water'){ 
                result.textContent = `Computer's water type beat your fire type... you suck`; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = 'Player Won'; 
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

        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none'; 
  
        if(playerScore > computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Won The Game';
            result.style.color = 'skyblue';
            // victorySong.volume = 0.2;
            // victorySong.play();
            
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Game'; 
            result.style.color = 'red'; 
        } 
        else{ 
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
    const victoryMusic = document.querySelector(".victoryMusic");
    const pauseMusic = document.querySelector(".battleMusicBtn")
  
    window.addEventListener("DOMContentLoaded", () => {
        battleMusic.volume = 0.09;
        battleMusic.play()
      });
    
    pauseMusic.addEventListener("click", () => {
        if (battleMusic.paused) {
          battleMusic.volume = 0.09;
          battleMusic.play();
          
        } else {
          battleMusic.pause();
        }
      });

    // Calling playGame function inside game 
    playGame(); 
      
} 
  
// Calling the game function 
game();

