//Telling Script the Id's so it understands what we are talking about

const info = document.getElementById("info");
const score = document.getElementById("score");
const image = document.getElementById("image");
const roll = document.getElementById("roll");

let total = 0
//Now it has understood them we can edit them using JavaScipt

roll.addEventListener('click', () => {
    let random = Math.floor((Math.random()*6)+1);
    image.src="./images/Dice" + random + ".png"
    
    // Update Score

    total += random
    score.textContent=total
    if (random = 1){
            
    }

    if(total>49){
            
    }
})