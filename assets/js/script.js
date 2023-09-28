console.log("Hello");

function changeColorTheme() {
  let buttons = document.getElementsByClassName("btn");
   for (let button of buttons) {
    if (button.classList.contains('btn-blue')) {
      console.log("yes");
    } else {
      console.log("no")
    }
  }
   }

  // buttons.addEventListener('click', function changeColor() {
  //   if (buttons hasClass(btn-blue))
  // })





changeColorTheme();

