// Initialising an Index variable
var index = 0;
// Make an array of all the colors you want to see displayed
var colors = ["purple", "cyan", "teal", "salmon"];

// This is the function in the Onclick value
function changeColors(){
    // Get the body
    var body = document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];

    // I want the colors to display repeatedly
    if(index> colors.length -1){
        index = 0; //This returns it to zero again
    }
}