if (window.performance.navigation.type === 1) {
    rollDice(); 
}

function rollDice() {
var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");

if (p1 > p2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (p1 < p2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
