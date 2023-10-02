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
        introScreen.style.opacity = '0';        

        window.setTimeout(hideIntroScreen, 900)
        window.setTimeout(showWelcomeText, 1100)
        window.setTimeout(hideWelcomeText, 2700)
        window.setTimeout(removeText, 3600)
        
        window.setTimeout(showGameScreen, 3700)
        window.setTimeout(visibleGameScreen, 3800)
      }
    })
  }
})

function hideIntroScreen() {
  let introScreen = document.getElementById('intro-screen');
  introScreen.style.setProperty('display', 'none');
}

function showWelcomeText() {
  let player = document.getElementById('nickname').value;
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.margin = '7rem auto';
  welcomeText.style.opacity = '1';
  welcomeText.innerText +=
    `Welcome
  ${player}
  Let's play!`;
}

function hideWelcomeText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.opacity = '0';
}

function removeText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.margin = '0';
  welcomeText.innerText = '';
}

function showGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.setProperty('display', 'block');
}

function visibleGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.setProperty('opacity', '1');
}