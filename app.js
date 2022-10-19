const prompt = require('prompt-sync')();
let keepingTrack = 0;

// my spaceship object 
const myShip = {
    health: 20,
    firepower: 5,
    accuracy: .7, 
}



function enemyShipHealth(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

function enemyShipFirePower(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function enemyShipAccuracy(min, max){
    return (Math.random() * (max - min) + min);
}



//////////////////
// START HERE !!!
//////////////////
console.log("You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.");
console.log("There are six alien ships. Battle the aliens and try to destroy them with your ships' lasers.");
const firstShip = prompt("There's an enemy vessel coming straight towards you! Would you like to play? Yes or No? ");
    if(firstShip === "Yes") {
        attackMain();
    } else {
    console.log("Someone can't take the heat. Smh.")
    process.exit();
} 


function attackMain(){
    console.log(`You have ${myShip.health} health, ${myShip.firepower} firepower, and ${myShip.accuracy} accuracy.`);
    const statsPrompt = prompt(`The enemy ship has ${enemyShipHealth(3, 6)} health, ${enemyShipFirePower(2, 4)} and fire-power. Would you like attack? Yes or No? `);
        if(statsPrompt === "Yes"){
            attack();
            } else {
                console.log("Oof! There's another one coming your way!");
                console.log(`You have ${myShip.health} health, ${myShip.firepower} firepower, and ${myShip.accuracy} accuracy.`)
                const statsPrompt = prompt(`The enemy ship has ${enemyShipHealth(3, 6)} health, ${enemyShipFirePower(2, 4)} fire-power, and ${enemyShipAccuracy(.5, .8)} accuracy. This one isn't taking no for an answer. Type "attack". `);
                if(statsPrompt === "attack"){
                    attack();
                } else {
                    console.log("Someone can't take the heat. Smh.")
                    process.exit();
                }
            }
        };
//call display health status after getting hit

//once ship life points = less than zero

function attack(){
         if(enemyShipAccuracy(0.6, 0.8) > myShip.accuracy){
               console.log("You've been hit!");
                myShip.health -=4;
                if(myShip.health === 0) {
                    console.log("You lose.");
                    process.exit();
                    } else {
                        attackMain();
                    }
                        } else {
                        console.log("You hit them!");
                        keepingTrack ++;
                        if(keepingTrack === 6){
                            console.log("You defeated six ships! You won!!!");
                            process.exit();
                    } attackMain();
         }  
    }





