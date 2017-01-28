var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
    // Generate all new colors
    colors = generateRandomColors(6);
    
    // Pick a new random color from array
    pickedColor = pickColor();
    
    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    
    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    
    h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

// Loop through the squares with the class .square
for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.background = colors[i];
    
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




// FUNCTIONS

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