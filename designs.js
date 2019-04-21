//ver 0.9

// Select color input

// Select size input

// Your code goes here!

//color cell
function colorCell(event) {
    //this gets the color value from the selector
    var color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
};

//make grid function
function makeGrid() {
    var table = document.getElementById("pixelCanvas");
    //reset table on new submit
    table.innerHTML = "";
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
        rowNumber.addEventListener("click", colorCell);
    };
    
};


// listen for submit event and build grid
// When size is submitted by the user, call makeGrid()
var gridSize = document.getElementById("sizePicker");
gridSize.addEventListener("submit", function (event){
    event.preventDefault();
    makeGrid();
});



