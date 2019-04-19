//ver 0.2

// Select color input
//this gets the color value from the selector
var color = document.getElementById("colorPicker").value;

// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
//to get value of Height and width 
var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;

// listen for submit event
var form = document.getElementById("form");
form.addEventListener("submit");

// create a pixel square and class assignment
var newPixel = document.createElement("div");
newPixel.className = "pixel";

//create CSS properties for pixel class
var pixelClass = document.querySelector(".pixel");
pixelClass.style.cssText = "border: 1px solid black; width : 5px; height : 5px;";

//add pixel into canvas table
var tableCanvas = document.querySelector("table");
tableCanvas.appendChild(newPixel);

}

