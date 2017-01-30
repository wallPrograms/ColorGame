var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    // Load the mode of the buttons depending on the game mode
    // mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //this.numSquares === "Easy" ? numSquare = 3: numSquares = 6;

            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }

            reset();
        });
    }
}

function setupSquares() {
    // Load the squares
    // Loop through the squares with the class .square
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab color of clicked square
            var clickedColor = this.style.background;
            console.log(clickedColor, pickedColor);
            //Compare it to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    
    // Pick a new random color from array
    pickedColor = pickColor();
    
    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    
    resetButton.textContent = "New Colors";
    
    messageDisplay.textContent = "";
    
    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { // Checking if there is a color that matches the square, for the first 3, there will be
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"; // colors[i] is undefined for the last 3, so it will be false
        }
    }
    
    h1.style.background = "steelBlue";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    
    // Repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    
    // Pick "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    
    // Pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    
    // rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}