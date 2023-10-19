// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


var playBtn = document.getElementById("play-button")
console.log(playBtn)
playBtn.addEventListener("click", redirect)

function redirect() {
    location.href = "./game.html";
}


