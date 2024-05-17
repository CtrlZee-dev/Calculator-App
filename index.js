// Assuming you have a toggle switch to change the theme
const calculator = document.querySelector(".calculator");
// Function to apply theme based on selected radio button
function applyTheme(theme) {
    // Remove existing theme classes from body and calculator
    document.body.classList.remove('theme1', 'theme2', 'theme3');
    calculator.classList.remove('theme1', 'theme2', 'theme3');
    
    // Add the new theme class to body and calculator
    document.body.classList.add(theme);
    calculator.classList.add(theme);
}

// Event listener for theme change
const themes = document.getElementsByName("themes");
themes.forEach(theme => {
    theme.addEventListener("change", (event) => {
        applyTheme(event.target.id);
    });
});

  

const display=document.getElementById("display");

function appendDisplay(input){
  display.value += input;
}


function clearDisplay(){
    display.value ="";
}
function del(){
      // Get the current value of the display
      let currentValue = display.value;
    
      // Update the display value by removing the last character
      display.value = currentValue.slice(0, -1);
}


function calculate(){
    let currentValue = display.value;

    try {
        let result = eval(currentValue);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }

}