// Iteration 5: Store the player score and display it on the game over screen

let scoreBox = document.getElementById("score-board");
let platBtn = document.getElementById("play-again-button");

let value = localStorage.getItem("score")

scoreBox.textContent = value;

let playAgain = document.getElementById("play-again-button")

playAgain.addEventListener("click", () => {
    location.href = "./game.html"
})
