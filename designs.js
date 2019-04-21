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
gridSize.addEventListener("submit", function makeGrid(event) {
    event.preventDefault();
    var table = document.getElementById("pixelCanvas");
    //to get value of Height and width 
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    //loop for each row
    for (row = 1; row <= height; row++ ) {
        //create and place new row
        var newRow = document.createElement("tr");
        newRow.setAttribute("id", "row "+ row);
        table.appendChild(newRow);

        //loop for each column
        for (column = 1; column <= width; column++) {
        //create new cell in row
            var newColumn = document.createElement("td");
            var rowNumber = document.getElementById("row " + row);
            rowNumber.appendChild(newColumn);
        };
    };
});


