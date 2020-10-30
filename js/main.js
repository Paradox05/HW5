//This function is for some tests i run
function tests() {
    // here i declare some varibale the inputs array is for the inputs
    // for the table boolarr holds boolean values to determine where errors happened
    
    var BoolArr= [];
    var current;
    var inputs = [];
    var bool = true;
    var output;
    for(i = 0; i < 4; i++) {
        current = parseFloat(document.getElementById("table"+ (i+1)).value);
        // we check if its a float 
        if(Number.isInteger(current)) {
            BoolArr.push(true);
            inputs.push(current);
        }
        else {
            BoolArr.push(false);
            bool = false;
        }         
    }

    var output;
    //we access the error message and output something to the html document
    for( var i = 0; i < 4; i+= 2) {
        output = document.getElementById("error-message" +((i/2)+1));
        if(BoolArr[i] && BoolArr[i+1]) {
            output.innerHTML = "<br>";
        }
        else {
            output.innerHTML = "<mark >invalid input !</mark>";
        }                     
    }
        
   return bool;
        
}


// this is our generate function where we generate the table
function generate() {
    if(!tests())
    {
        return;
    } 
    // we get the user inputs and assign them variables
    let a, b,c,d, table, row, col;   
    a = Number.parseInt(document.getElementById('table1').value);
    b = Number.parseInt(document.getElementById('table2').value);
    c = Number.parseInt(document.getElementById('table3').value);
    d = Number.parseInt(document.getElementById('table4').value);
    // we do some checking to see if the numbers need to be swapped 
    // and i also check if the inputs are above or below 50, and -50
    let output;
    if(a > b) {
        [a,b] = [b, a];   
        output = document.getElementById("swap1");
        output.innerHTML = "<mark>Elements were swapped because they are in the wrong order</mark>";
    }
    if(c > d) {
        [c,d] = [d, c];
        output = document.getElementById("swap2");
        console.log(typeof(c));
        output.innerHTML = "<mark>Elements were swapped because they are in the wrong order</mark>";
    }
    if(a > 50 || b > 50 || a < -50 || b < -50) {
        output = document.getElementById("not-intended1");
        output.innerHTML = "<mark>Table is only meant to handle up to 50 or -50</mark>";
    }
    
    if(c > 50 || d > 50 || c < -50 || d < -50) {
        output = document.getElementById("not-intended2");
        output.innerHTML = "<mark>Table is only meant to handle up to 50 or -50</mark>";
    }
    
    table = "<tr><th></th> ";

    //print the fourn number to ensure that we are readin it in correctly
    console.log("Horizontal min = " + a, "Horizontal Max = " + b);
    console.log("Verical min = " + c, "Vertical Max = " + d);

    for(i = a; i <= b; i++) {
        table += "<th class=\"align-middle\">" + i + "</th>";
    }
    table += "</tr>";
    
    
    for(var i = c; i <= d; ++i) {
        table += "<tr><th class=\"align-middle\">" + i + "</th>";
        for(var j = a; j <= b; ++j) {
            table += "<td class=\"align-middle\">" + (i*j) + "</td>";

        }
        table += "</tr>";
    }
    document.getElementById("tabler").innerHTML = table;

}
