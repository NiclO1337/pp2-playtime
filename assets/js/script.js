/**
 * After all DOM content is loaded, add mouseover event
 * listeners to all buttons and call functions to add on
 * clock event listener to different categories of buttons
 */
document.addEventListener('DOMContentLoaded', function () {

  let buttons = document.getElementsByClassName("btn");
  for (let button of buttons) {

    button.addEventListener('mouseover', function () {
      button.style.boxShadow = '0 0 0.3rem var(--color-primary)';
    })
    button.addEventListener('mouseout', function () {
      button.style.boxShadow = 'none';
    })
  }
  themeButtons();
  playGameButton();
  gameButtons();
})


/* --------------------------
------- Theme buttons -------
-------------------------- */

/**
 * Add event listener to theme buttons that
 * let user set the desired colour theme
 */
function themeButtons() {
  let buttons = document.getElementsByClassName('theme-btn');
  for (let button of buttons) {
    button.addEventListener('click', function () {
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
      }

      button.style.borderStyle = 'inset';
      window.setTimeout(afterClick, 100)
      function afterClick() {
        button.style.borderStyle = 'outset';
      }
    })
  }
}

/**
 * Generates random colors for theme when
 * clicking rainbow colored button
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
 * Sets theme color based on user
 * input into color picker button
 */
function chosenColor() {
  let input = document.getElementById('color-input');
  input.addEventListener('input', function inputColor() {
    document.documentElement.style.setProperty('--color-primary', input.value);
  })
}


/* --------------------------
----- Play game button ------
-------------------------- */

/**
 * Clicking Play game button starts a chains of timed events to
 * hide intro screen, welcome the player and then show game screen
 */
function playGameButton() {

  let button = document.getElementsByClassName('play-game-btn')[0];
  button.addEventListener('click', function () {

    let nickname = document.getElementById('nickname').value;
    let errorDiv = document.getElementById('error-div');

    if (nickname === '') {
      errorDiv.innerText = `Please enter a nickname, 
    I would like to know who I am
    about to demolish.`;
    } else if (nickname.length > 15) {
      errorDiv.innerText = `Please do not use more than 15 
      characters. Just need a nickname, 
      not your whole life story. 
      Please and thank you.`
    } else {
      window.setTimeout(fadeIntroScreen, 0)
      window.setTimeout(hideIntroScreen, 900)
      window.setTimeout(showWelcomeText, 1100)
      window.setTimeout(hideWelcomeText, 2700)
      window.setTimeout(removeWelcomeText, 3600)
      window.setTimeout(showGameScreen, 3700)
      window.setTimeout(fadeGameScreen, 3800)
    }

    document.getElementById('player-name').innerText = nickname;

    button.style.borderStyle = 'inset';
    window.setTimeout(afterClick, 100)
    function afterClick() {
      button.style.borderStyle = 'outset';
    }
  })
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


/* --------------------------
------- Game buttons --------
-------------------------- */

/**
 * 
 */
function gameButtons() {
  let buttons = document.getElementsByClassName('game-btn');
  for (let button of buttons) {
    button.addEventListener('click', function () {

      document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '0';
      document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '0';

      document.getElementsByClassName('rps-bg')[0].classList.remove('rock');
      document.getElementsByClassName('rps-bg')[0].classList.remove('paper');
      document.getElementsByClassName('rps-bg')[0].classList.remove('scissor');

      function playerChoice() {
        if (button === document.getElementsByClassName('game-btn')[0]) {
          document.getElementsByClassName('rps-bg')[0].classList.add('rock');
        } else if (button === document.getElementsByClassName('game-btn')[1]) {
          document.getElementsByClassName('rps-bg')[0].classList.add('paper');
        } else {
          document.getElementsByClassName('rps-bg')[0].classList.add('scissor');
        }
      }

      window.setTimeout(disableButtons, 100)
      window.setTimeout(removeStartingClass, 500)
      window.setTimeout(arnoldChoice, 500)
      window.setTimeout(playerChoice, 500)
      window.setTimeout(checkWinner, 700)
      window.setTimeout(revealImages, Math.random() * 1000 + 500)
      window.setTimeout(hideChoises, 3000)
      window.setTimeout(resetChoises, 3100)
      window.setTimeout(addStartingClass, 3200)
      window.setTimeout(revealImages, 3300)
      window.setTimeout(enableButtons, 3900)


      button.style.borderStyle = 'inset';
      window.setTimeout(afterClick, 100)
      function afterClick() {
        button.style.borderStyle = 'outset';
      }
    })
  }
}

function disableButtons() {
  let buttons = document.getElementsByClassName('game-btn');
  for (let button of buttons) {
    button.disabled = true;
    button.style.backgroundColor = 'rgb(106, 137, 168)';
  }
}

function removeStartingClass() {
  document.getElementsByClassName('rps-bg')[0].classList.remove('rps-player');
  document.getElementsByClassName('rps-bg')[1].classList.remove('rps-arnold');
}

function arnoldChoice() {

  let randomNumber = Math.floor(Math.random() * 3);
  let rpsArnold = document.getElementsByClassName('rps-bg')[1];

  rpsArnold.classList.remove('rock');
  rpsArnold.classList.remove('paper');
  rpsArnold.classList.remove('scissor');

  if (randomNumber === 0) {
    rpsArnold.classList.add('rock');
  } else if (randomNumber === 1) {
    rpsArnold.classList.add('paper');
  } else {
    rpsArnold.classList.add('scissor');
  }
}

function checkWinner() {
  let player = document.getElementsByClassName('rps-bg')[0];
  let arnold = document.getElementsByClassName('rps-bg')[1];

  if (player.classList.contains('rock')) {
    playerPick = 'rock';
  } else if (player.classList.contains('paper')) {
    playerPick = 'paper';
  } else {
    playerPick = 'scissor';
  }

  if (arnold.classList.contains('rock')) {
    arnoldPick = 'rock';
  } else if (arnold.classList.contains('paper')) {
    arnoldPick = 'paper';
  } else {
    arnoldPick = 'scissor';
  }

  if (playerPick === arnoldPick) {
    tie();
  } else if (
    playerPick === 'rock' && arnoldPick === 'scissor' ||
    playerPick === 'paper' && arnoldPick === 'rock' ||
    playerPick === 'scissor' && arnoldPick === 'paper'
  ) {
    playerWin();
  } else {
    arnoldWin();
  }
}

function tie() {
  let message = document.getElementById('win-loose-msg');
  message.style.fontSize = '180%';
  message.style.color = 'orange';
  message.innerText = 'It\'s a tie';
}

function playerWin() {
  let message = document.getElementById('win-loose-msg');
  let player = document.getElementById('nickname').value;
  message.style.fontSize = '120%';
  message.style.color = 'red';
  message.innerText = `One point to ${player}.`;
  console.log('player win');
}

function arnoldWin() {
  let message = document.getElementById('win-loose-msg');
  message.style.fontSize = '180%';
  message.style.color = 'green';
  message.innerText = 'Arnold wins!';
  console.log('arnold win');
}

function revealImages() {
  document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '100%';
  document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '100%';
}

function hideChoises() {
  document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '0';
  document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '0';
}

function resetChoises() {
  document.getElementsByClassName('rps-bg')[0].classList.remove('rock');
  document.getElementsByClassName('rps-bg')[0].classList.remove('paper');
  document.getElementsByClassName('rps-bg')[0].classList.remove('scissor');

  document.getElementsByClassName('rps-bg')[1].classList.remove('rock');
  document.getElementsByClassName('rps-bg')[1].classList.remove('paper');
  document.getElementsByClassName('rps-bg')[1].classList.remove('scissor');
}

function addStartingClass() {
  document.getElementsByClassName('rps-bg')[0].classList.add('rps-player');
  document.getElementsByClassName('rps-bg')[1].classList.add('rps-arnold');
}

function enableButtons() {
  let buttons = document.getElementsByClassName('game-btn');
  for (let button of buttons) {
    button.disabled = false;
    button.style.backgroundColor = 'var(--color-primary)';
  }
}
