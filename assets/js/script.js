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

        window.setTimeout(hideIntroScreen, 900)
        window.setTimeout(showText, 1100)
        window.setTimeout(hideText, 2700)
        window.setTimeout(removeText, 3600)
        window.setTimeout(showGameScreen, 3800)
        
      }
    })
  }
})

function hideIntroScreen() {
  let introScreen = document.getElementById('intro-screen');
  introScreen.style.setProperty('display', 'none');
}

function showText() {
  let player = document.getElementById('nickname').value;
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.margin = '20% auto';
  welcomeText.style.opacity = '1';
  welcomeText.innerText += 
  `Welcome
  ${player}
  Let's play!`;
}

function hideText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.opacity = '0';
}

function removeText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.innerText = '';
}

function showGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.display = 'block';
  gameScreen.style.opacity = '1';  
}