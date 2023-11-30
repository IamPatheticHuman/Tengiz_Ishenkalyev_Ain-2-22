document.addEventListener("DOMContentLoaded", function () {

    const gmailInput = document.getElementById("gmail_input");
    const gmailButton = document.getElementById("gmail_button");
    const gmailResult = document.getElementById("gmail_result");

    gmailButton.addEventListener("click", function () {
        const inputValue = gmailInput.value;

        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (gmailRegex.test(inputValue)) {
            gmailResult.textContent = "Valid Gmail address!";
            gmailResult.style.color = "green";
        } else {
            gmailResult.textContent = "Invalid Gmail address. Please enter a valid Gmail address.";
            gmailResult.style.color = "red";
        }
    });

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let xPos = 0;
let yPos = 0;

let xSpeed = 2;
let ySpeed = 0;

const squareSize = 50;

function updateSquarePosition() {
    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos + squareSize > parentBlock.clientWidth) {
        xPos = parentBlock.clientWidth - squareSize;
        ySpeed = 2;
        xSpeed = 0;
    }

    if (yPos + squareSize > parentBlock.clientHeight) {
        yPos = parentBlock.clientHeight - squareSize;
        xSpeed = -2;
        ySpeed = 0;
    }

    if (xPos < 0) {
        xPos = 0;
        ySpeed = -2;
        xSpeed = 0;
    }

    if (yPos < 0) {
        yPos = 0;
        xSpeed = 2;
        ySpeed = 0;
    }

    childBlock.style.left = xPos + "px";
    childBlock.style.top = yPos + "px";

    requestAnimationFrame(updateSquarePosition);
}

updateSquarePosition();


    let timer;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    function startStopwatch() {
        timer = setInterval(updateStopwatch, 10);
    }

    function stopStopwatch() {
        clearInterval(timer);
    }

    function resetStopwatch() {
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
    }

    function updateStopwatch() {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('minutesS').innerText = padNumber(minutes);
        document.getElementById('secondsS').innerText = padNumber(seconds);
        document.getElementById('ml-secondsS').innerText = padNumber(milliseconds);
    }

    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }
});
