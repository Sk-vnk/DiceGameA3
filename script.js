//Telling Script the Id's so it understands what we are talking about

const info = document.getElementById("info");
const score = document.getElementById("score");
const image = document.getElementById("image");
const roll = document.getElementById("roll");
const playAgain = document.getElementById("playAgain");

let total = 0;
//Now it has understood them we can edit them using JavaScipt

roll.addEventListener('click', () => {
    let random = Math.floor((Math.random()*6)+1);
    image.src="./images/Dice" + random + ".png"
    
    // Update Score

    total += random
    score.textContent=total
    if (random == 1){
            info.textContent = "You LOSE!";
            playAgain.style.display = "block";
            roll.style.display = "none";
    }

    if(total>19){
            info.textContent = "You WIN!";
           playAgain.style.display = "block";
           roll.style.display = "none";
    }
})

playAgain.addEventListener('click', () => {
    total = 0;
    score.textContent = total;
    info.textContent = "Player 1";
    image.src="./images/Dice1.png";
    playAgain.style.display="none";
    roll.style.display = "block";    
})