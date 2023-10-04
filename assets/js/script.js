/**
 * Function to add event listener to all buttons on the page
 * and execute functions based on which button is clicked.
 */
document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByClassName("btn");
  for (let button of buttons) {
    button.addEventListener('click', function () {

      button.style.borderStyle = 'inset';
      window.setTimeout(afterClick, 100)
      function afterClick() {
        button.style.borderStyle = 'outset';
      }

      if (button.classList.contains('btn-blue')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)');
      } else if (button.classList.contains('btn-red')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(180, 2, 2)');
      } else if (button.classList.contains('btn-green')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(64, 141, 29)');
      } else if (button.classList.contains('btn-random')) {
        randomColor();
      } else if (button.classList.contains('color-input')) {
        chosenColor();
      } else if (button.classList.contains('play-game-btn')) {
        playGame();
      } else if (button.classList.contains('game-btn')) {
        runGame();
      }
    })

    button.addEventListener('mouseover', function () {
      button.style.boxShadow = '0 0 0.3rem var(--color-primary)';
    })
    button.addEventListener('mouseout', function () {
      button.style.boxShadow = 'none';
    })
  }
})

/**
 * Generates random colors when clicking rainbow colored button
 */
function randomColor() {
  let hexValues = '0123456789ABCDEF';
  let hashtag = '#';
  for (let values = 0; values < 6; values++) {
    hashtag += hexValues[Math.floor(Math.random() * 16)];
    document.documentElement.style.setProperty('--color-primary', hashtag);
  }
}

/**
 * Sets color based on user input into color picker button
 */
function chosenColor() {
  let input = document.getElementById('color-input');
  input.addEventListener('input', function inputColor() {
    document.documentElement.style.setProperty('--color-primary', input.value);
  })
}


/**
 * Clicking Play game button starts a chains of timed events to
 * hide intro screen, welcome the player and then show game screen
 */
function playGame() {
  let nickname = document.getElementById('nickname').value;
  let errorDiv = document.getElementById('error-div');
  if (nickname === '') {
    errorDiv.innerText = `Please enter a nickname, 
    I would like to know who I am
    about to demolish.`;
  } else {
    window.setTimeout(fadeIntroScreen, 0)
    window.setTimeout(hideIntroScreen, 900)
    window.setTimeout(showWelcomeText, 1100)
    window.setTimeout(hideWelcomeText, 2700)
    window.setTimeout(removeWelcomeText, 3600)
    window.setTimeout(showGameScreen, 3700)
    window.setTimeout(fadeGameScreen, 3800)
  }
}

function fadeIntroScreen() {
  let introScreen = document.getElementById('intro-screen');
  introScreen.style.opacity = '0';
}

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
  ${player}!
  Let's play`;
}

function hideWelcomeText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.opacity = '0';
}

function removeWelcomeText() {
  let welcomeText = document.getElementById('welcome-text');
  welcomeText.style.margin = '0';
  welcomeText.innerText = '';
}

function showGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.setProperty('display', 'block');
}

function fadeGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.setProperty('opacity', '1');
}

function runGame() {
  document.getElementsByClassName('rps-player')[0].style.backgroundSize = '0';
  document.getElementsByClassName('rps-arnold')[0].style.backgroundSize = '0';

  window.setTimeout(removeClass, 500)
  window.setTimeout(arnoldChoice, Math.random() * 1000 + 500)
}

function removeClass() {
  document.getElementsByClassName('rps-player')[0].classList.remove('rps-player');
  document.getElementsByClassName('rps-arnold')[0].classList.remove('rps-arnold');
}

function arnoldChoice() {
  document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '100%';

  let randomNumber = Math.floor(Math.random() * 3);
  let rpsArnold = document.getElementsByClassName('rps-bg')[1];
  if (randomNumber === 0) {
    rpsArnold.classList.add('rock');
  } else if (randomNumber === 1) {
    rpsArnold.classList.add('paper');
  } else {
    rpsArnold.classList.add('scissor');
  }
}


