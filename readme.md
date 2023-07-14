# Change Colors

This is a simple JavaScript code snippet that allows you to change the background color of an HTML page by clicking a button.

## Usage

1. Add the following HTML code to your webpage:

   ```html
   <button onclick="changeColors()">Change Color</button>
   ```

2. Add the JavaScript code to your script file or inline in your HTML:

   ```javascript
   // Initialising an Index variable
   var index = 0;
   // Make an array of all the colors you want to see displayed
   var colors = ["purple", "cyan", "teal", "salmon"];

   // This is the function in the Onclick value
   function changeColors(){
       // Get the body
       var body = document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];

       // I want the colors to display repeatedly
       if(index > colors.length - 1){
           index = 0; //This returns it to zero again
       }
   }
   ```

3. Open your webpage and click the "Change Color" button to cycle through the colors in the `colors` array.

Feel free to modify the `colors` array to include your desired colors.

## Screenshots
![Screenshot #1](./screenshot1.png)
![Screenshot #2](./screenshot2.png)


## License

This code is licensed under the [MIT License](LICENSE).