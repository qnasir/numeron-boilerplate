// Iteration 2: Generate 2 random number and display it on the screen
// Math.random low 0 high < 1

var num1;
var num2;

let num1_box = document.getElementById("number1")
let num2_box = document.getElementById("number2")


function generateRandomNumber() {   
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);
    
    num1_box.textContent = num1
    num2_box.textContent = num2 
}

generateRandomNumber();


// Iteration 3: Make the options button functional

let score = 0;

var greaterThan = document.getElementById("greater-than")
var equalTo = document.getElementById("equal-to")
var lesserThan = document.getElementById("lesser-than")

greaterThan.onclick = () => {
    if(num1 > num2) {
        score++;
        update()       
    } else {
        window.open("./gameover.html" , "_self")
    }

    generateRandomNumber()

}


equalTo.onclick = () => {
    if(num1 == num2) {
        score++;
        update()
    } else {
        window.open("./gameover.html" , "_self")
    }

    generateRandomNumber()

}

lesserThan.onclick = () => {
    if(num1 < num2) {
        score++;
        update()
    } else {
        window.open("./gameover.html" , "_self")
    }

    generateRandomNumber() // for generating next set of random number

}


// Iteration 4: Build a timer for the game

let time = 5;
let timerBox = document.getElementById("timer");
let interval;

    function startInterval() {
        time = 5;
        interval = setInterval(()=> {


            if (time == 0) {
                clearInterval(interval);
                location.href = "./gameover.html"
            }

            timerBox.textContent = time;
            time--;
        }, 1000)

    }

    function update() {
        generateRandomNumber()
        //console.log(score);
        localStorage.setItem("score", score) // for update the old interval
        clearInterval(interval) // for clearing old interval
        startInterval() // for starting new interval
    }

startInterval()

localStorage.setItem("score", 0)