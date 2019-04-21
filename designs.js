//ver 0.2

// Select color input
//this gets the color value from the selector
var color = document.getElementById("colorPicker").value;

// Select size input

// Your code goes here!


// listen for submit event and build grid
// When size is submitted by the user, call makeGrid()
var gridSize = document.getElementById("sizePicker");

//make grid function
gridSize.addEventListener("submit", function makeGrid() {
    var table = document.getElementById("pixelCanvas");
    var grid = "";
    //to get value of Height and width 
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    //loop for each row
    for (row = 0; row < height; row++ ) {
        //loop for each column
        for (column = 0; column < width; column++) {
        };
    };
});

// create a pixel square and class assignment
function createNewPixel(){
    var newPixel = document.createElement("div");
    newPixel.className = "pixel";

//create CSS properties for pixel class
    var pixelClass = document.querySelector(".pixel");
    pixelClass.style.cssText = "border: 1px solid black; width : 5px; height : 5px;";

//add pixel into canvas table
    var tableCanvas = document.querySelector("table");
    tableCanvas.appendChild(newPixel);
}
