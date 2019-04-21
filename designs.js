//ver 0.5

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
    event.preventDefault();
    var table = document.getElementById("pixelCanvas");
    //to get value of Height and width 
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    //loop for each row
    for (row = 1; row <= height; row++ ) {
        //create and place new row and row ID
        var newRow = document.createElement("tr");
        newRow.setAttribute("id", "row "+ row);
        table.appendChild(newRow);

        //loop for each column
        for (column = 1; column <= width; column++) {
        //create new cell in individual rows
            var newColumn = document.createElement("td");
            //newColumn.setAttribute("id", "row: " + row + " column: " + column);
            var rowNumber = document.getElementById("row " + row);
            rowNumber.appendChild(newColumn);
        };
        //add event listner to each cell
        newColumn.addEventListener("click", colorCell(event));
    };
    
});


//color cell
function colorCell(event) {
    var color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
};




