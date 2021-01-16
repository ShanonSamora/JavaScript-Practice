//=========================================================
// Helper Functions
//=========================================================
const pickColor = () => {
    // Get random number between 0 and 5, inclusive
    // 'Math.random()' will get a random number between 0 and 1. It does not include 1 but it'll go up to 0.9999999...
    // It's multiplied by 6 (the length of the array 'colors') in order to get a number between 0 and 5
    // 'Math.floor()' rounds down to the nearest integer
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

const generateRandomColor = () => {
    // pick r,g,b values between 0 & 255
    const r = Math.floor(Math.random() * 256)
    // Why 256? Because it does not include 1. In this case (with 256) would be "between 0 and 255.999999999"
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

const generateRandomColors = (num) => {
    let output = [];
    // add num random colors to the array
    for (let i = 0; i < num; i++) {
        output.push(generateRandomColor());
    }
    return output
}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) { // This means "if the color exists..."
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.backgroundColor = document.querySelector("body").style.backgroundColor;
        }
    }
    title.style.backgroundColor = "steelblue";
    message.textContent = "";
}

//=========================================================
// Initiate variables
//=========================================================

// State
let numSquares = 6;
const numSquaresEasyMode = 3;
const numSquaresHardMode = 6;
colors = generateRandomColors(numSquares);
// will generate an array of 6 random colors

// Choose winning color
let pickedColor = pickColor();

// Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.getElementById("gameTitle");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

//=========================================================
// Main
//=========================================================
function main() {
    // Update colorDisplay
    colorDisplay.textContent = pickedColor;

    // Reset Colors Button
    resetButton.addEventListener("click", reset);

    // Mode Buttons
    modeButtons.forEach((button) => {
    button.addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        if (this.textContent === "Easy") {
            numSquares = numSquaresEasyMode;
        } else {
            numSquares = numSquaresHardMode;
        }
        reset();
    })

    // Set up squares
    for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function() {
        
        const clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!"
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
            message.textContent = "You suck"
        }
    })
}
})
}

main();