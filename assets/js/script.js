document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByClassName("btn");

  for (let button of buttons) {
    button.addEventListener('click', function changeColor() {
      if (button.classList.contains('btn-blue')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)');
      } else if (button.classList.contains('btn-red')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(180, 2, 2)');
      }  else if (button.classList.contains('btn-green')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(64, 141, 29)')
      } else if (button.classList.contains('btn-random')) {
        console.log("random");
      } else if (button.classList.contains('color-input')) {
        let input = document.getElementById('color-input');        
        input.addEventListener('input', function inputColor() {
          console.log(input.value);
          document.documentElement.style.setProperty('--color-primary', 'input.value')
          }) 
      }
    })
  }
})



/**
 * Function to change color theme based on which button is pressed
 */
// function changeColorTheme() {
//   let buttons = document.getElementsByClassName("btn");


//   for (let button of buttons) {
//     button.addEventListener('click', function changeColor() {
//       if (button.classList.contains('btn-blue')) {
//         document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)');
//       } else if (button.classList.contains('btn-red')) {
//         document.documentElement.style.setProperty('--color-primary', 'rgb(180, 2, 2)');
//       } else if (button.classList.contains('btn-green')) {
//         document.documentElement.style.setProperty('--color-primary', 'rgb(64, 141, 29)')
//       } else if (button.classList.contains('btn-random')) {
//         console.log("random");
//       } else if (button.classList.contains('color-input')) {
//         let input = document.getElementById('color-input');        
//         input.addEventListener('input', function inputColor() {
//           console.log(input.value);
//           document.documentElement.style.setProperty('--color-primary', 'input.value')
//           }) 
//       }
//     })
    // let input = document.getElementById('color-input');
    // input.addEventListener('click', function changeColor() {
    //   console.log(input.value);
    //   document.documentElement.style.setProperty('--color-primary', 'input')
    // })    
//   }
// }


// buttons.addEventListener('click', function changeColor() {
//   if (buttons hasClass(btn-blue))
// })


// else if (button.classList.contains("color-input")) {
//   let input = document.getElementById('input-color').value;
//   console.log(input);
  // document.documentElement.style.setProperty('--color-primary', 'input');



// changeColorTheme();

