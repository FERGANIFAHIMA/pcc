let wins =0; let loses = 0;
const choices = ["papier","caillow","ciseaux"];
const gameStatus =document.getElementById("gamestatu");
const gameScore=document.getElementById("gamescore");
const paper =document.getElementById("papier");
const caillow=document.getElementById("caillow");
const ciseaux =document.getElementById("ciseaux");

// function rungame(user){
//     const comchoice = choices[Math.floor(Math.random()*choices.length)];
//     console.log(`M:${user}|Co:${comchoice}`)
// }
function runGame(userChoice) {
  
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    switch(userChoice + '_' + computerChoice) {
      case 'papier_ciseaux':
      case 'caillow_papier':
      case 'ciseaux_caillow':
        loses += 1;
        gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> C Wins`
        break;
      case 'papier_caillow':
      case 'caillow_ciseaux':
      case 'ciseaux_papier':
        wins += 1;
        gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> M Wins`
        break;
      case 'papier_papier':
      case 'caillow_caillow':
      case 'ciseaux_ciseaux':
        gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> Egalité`
        break;
    }
  
    gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`;
  }



paper.addEventListener("click",()=>runGame("papier"));
ciseaux.addEventListener("click",()=>runGame("ciseaux"));
caillow.addEventListener("click",()=>runGame("caillow"));
