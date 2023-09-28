/**
 * Function to change color theme based on which button is pressed
 */
function changeColorTheme() {
  let buttons = document.getElementsByClassName("btn");

  for (let button of buttons) {
    if (button.classList.contains('btn-blue')) {
      console.log("blue");
      document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)')
    } else if (button.classList.contains('btn-red')) {
      console.log("red");
    } else if (button.classList.contains('btn-green')) {
      console.log("green");
    } else if (button.classList.contains('btn-random')) {
      console.log("random");
    } else if (button.classList.contains("color-input")) {
      console.log("input-color");
    }
  }
}


// buttons.addEventListener('click', function changeColor() {
//   if (buttons hasClass(btn-blue))
// })





changeColorTheme();

