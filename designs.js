//ver 1.0

//adds color to selected cells
function colorCell(event) {

    // Select color input and change cell style
    var color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
};

//make grid function
function makeGrid() {

    // Select size input
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var table = document.getElementById("pixelCanvas");

    //reset table on new submit
    table.innerHTML = "";

    //create new rows
    for (row = 1; row <= height; row++ ) {
        var newRow = document.createElement("tr");
        table.appendChild(newRow);

        //create columns in rows
        for (column = 1; column <= width; column++) {
            var newColumn = document.createElement("td");
            newRow.appendChild(newColumn);
        };
        //add event listner to each cell
        newRow.addEventListener("click", colorCell);
    }; 
};


/* listen for submit event and build grid
When size is submitted by the user, call makeGrid()*/
var gridSize = document.getElementById("sizePicker");
gridSize.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
});
