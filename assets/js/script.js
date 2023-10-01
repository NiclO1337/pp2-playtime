/**
 * Function to change color theme based on which button is pressed
 */
document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByClassName("btn");

  for (let button of buttons) {
    button.addEventListener('click', function changeColor() {
      if (button.classList.contains('btn-blue')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)');
      } else if (button.classList.contains('btn-red')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(180, 2, 2)');
      } else if (button.classList.contains('btn-green')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(64, 141, 29)');
      } else if (button.classList.contains('btn-random')) {
        let hexValues = '0123456789ABCDEF';
        let hashtag = '#';
        for (let values = 0; values < 6; values++) {
          hashtag += hexValues[Math.floor(Math.random() * 16)];
        }
        document.documentElement.style.setProperty('--color-primary', hashtag);
      } else if (button.classList.contains('color-input')) {
        let input = document.getElementById('color-input');
        input.addEventListener('input', function inputColor() {
          document.documentElement.style.setProperty('--color-primary', input.value);
        })
      }
      if (button.classList.contains('play-game-btn')) {
        let introScreen = document.getElementById('intro-screen');
        introScreen.style.transition = 'opacity 0.8s';
        introScreen.style.opacity = '0';

        window.setTimeout(hideContent, 900)        
        function hideContent() {
          introScreen.style.setProperty('display', 'none');
          console.log("testing timer1");          
        }
        window.setTimeout(showText, 1100)
        function showText() {
          console.log("testing timer2");
          let gameBackground = document.getElementsByClassName('game-background')[0];
          console.log(gameBackground);
          let player = document.getElementById('nickname').value;
          let welcomeText = document.createElement('h1');
          welcomeText.innerHTML = 'Hello';
          // `Welcome ${player}!
          // Let's play`;
          gameBackground.appendChild(welcomeText);
        }
      }
    })
  }
})