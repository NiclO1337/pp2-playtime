/**
 * After all DOM content is loaded, add mouseover event
 * listeners to all buttons and call functions to add on
 * clock event listener to different categories of buttons
 */
document.addEventListener('DOMContentLoaded', function () {

  let buttons = document.getElementsByClassName("btn");
  for (let button of buttons) {

    button.addEventListener('mouseover', function () {
      this.style.boxShadow = '0 0 0.3rem var(--color-primary)';
    });
    button.addEventListener('mouseout', function () {
      this.style.boxShadow = 'none';
    });
  }

  let lis = document.getElementsByClassName('footer-flex-container')[0].children;
  for (let li of lis) {
    li.addEventListener('mouseover', function () {
      this.style.textShadow = '0 0 1px var(--color-primary)';
    });
    li.addEventListener('mouseout', function () {
      this.style.textShadow = 'none';
    });
  }
  // Run functions to add eventlisteners to specific buttons
  themeButtons();
  playGameButton();
  gameButtons();
  playAgainButton();
  liButtons();
});


/* --------------------------
------- Theme buttons -------
-------------------------- */

/**
 * Add event listener to theme buttons that
 * let user set the desired colour theme
 */
function themeButtons() {
  let buttons = document.getElementsByClassName('theme-btn');
  for (const button of buttons) {
    button.addEventListener('click', function () {
      if (this.classList.contains('btn-blue')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(6, 64, 119)');
      } else if (this.classList.contains('btn-red')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(180, 2, 2)');
      } else if (this.classList.contains('btn-green')) {
        document.documentElement.style.setProperty('--color-primary', 'rgb(64, 141, 29)');
      } else if (this.classList.contains('btn-random')) {
        randomColor();
      } else if (this.classList.contains('color-input')) {
        chosenColor();
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
       * input into color picker
       */
      function chosenColor() {
        let input = document.getElementById('color-input');
        input.addEventListener('input', function inputColor() {
          document.documentElement.style.setProperty('--color-primary', input.value);
        });
      }

      // Mousover effect
      button.style.borderStyle = 'inset';
      window.setTimeout(afterClick, 100);
      function afterClick() {
        button.style.borderStyle = 'outset';
      }
    });
  }
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

    // Validates that user has entered a name and that
    // it is not more than 12 characters in length
    if (nickname === '') {
      errorDiv.innerText = `Please enter a nickname. 
    I would like to know who I am
    about to demolish.`;
    } else if (nickname.length > 12) {
      errorDiv.innerText = `Please do not use more than 12 
      characters. Just need a nickname, 
      not your whole life story. 
      Please and thank you.`;
    } else {
      window.setTimeout(fadeIntroScreen, 0);
      window.setTimeout(hideIntroScreen, 900);
      window.setTimeout(showWelcomeText, 1100);
      window.setTimeout(fadeInWelcomeText, 1100);
      window.setTimeout(fadeOutWelcomeText, 2700);
      window.setTimeout(removeWelcomeText, 3600);
      window.setTimeout(showGameScreen, 3700);
      window.setTimeout(fadeInGameScreen, 3800);
    }

    document.getElementById('player-name').innerText = nickname;
    document.getElementById('player-name-result').innerText = nickname;

    // Mousover effect
    button.style.borderStyle = 'inset';
    window.setTimeout(afterClick, 100);
    function afterClick() {
      button.style.borderStyle = 'outset';
    }
  });
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
  welcomeText.style.display = 'block';
  welcomeText.innerText =
    `Welcome
  ${player}!
  Let's play`;
}

function fadeInWelcomeText() {
  document.getElementById('welcome-text').style.opacity = '1';
}

function fadeOutWelcomeText() {
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

function fadeInGameScreen() {
  let gameScreen = document.getElementById('game-screen');
  gameScreen.style.setProperty('opacity', '1');
}


/* --------------------------
------- Game buttons --------
-------------------------- */

/**
 * Game buttons for player to make their choice of Rock, Paper, or Scissor.
 * Starts a chain of timed events to hide starting icons, check computers choice,
 * compare to players choice and determine the winner. Then display winner and
 * increment the winners score by 1. Also check if a player has reached 3 points
 * and if so, end the game and display the result screen.
 */
function gameButtons() {
  let buttons = document.getElementsByClassName('game-btn');
  for (const button of buttons) {
    button.addEventListener('click', function () {

      document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '0';
      document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '0';

      window.setTimeout(disableButtons, 100);
      window.setTimeout(removeStartingClass, 500);
      window.setTimeout(arnoldChoice, 500);
      window.setTimeout(playerChoice, 500);
      window.setTimeout(checkWinner, 700);
      window.setTimeout(revealImages, Math.random() * 1200 + 500);
      window.setTimeout(showResultMessage, 2100);
      window.setTimeout(hideChoises, 3000);
      window.setTimeout(hideResultMessage, 3100);
      window.setTimeout(resetChoises, 3100);
      window.setTimeout(addStartingClass, 3200);
      window.setTimeout(revealImages, 3400);
      window.setTimeout(enableButtons, 3700);

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

      // Show Arnolds choice on game screen
      function arnoldChoice() {

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

      // Show player's choice on game screen
      function playerChoice() {
        if (button === document.getElementsByClassName('game-btn')[0]) {
          document.getElementsByClassName('rps-bg')[0].classList.add('rock');
        } else if (button === document.getElementsByClassName('game-btn')[1]) {
          document.getElementsByClassName('rps-bg')[0].classList.add('paper');
        } else {
          document.getElementsByClassName('rps-bg')[0].classList.add('scissor');
        }
      }

      function checkWinner() {
        const player = document.getElementsByClassName('rps-bg')[0];
        const arnold = document.getElementsByClassName('rps-bg')[1];

        let playerPick = '';
        let arnoldPick = '';

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
        message.style.textShadow = '0 0 1px #7a7a7a79';
        message.style.color = 'orange';
        message.innerText = 'It\'s a tie';
      }

      // If player wins, show message and increment the score
      function playerWin() {
        let message = document.getElementById('win-loose-msg');
        let player = document.getElementById('nickname').value;
        let playerNew = '';
        message.style.fontSize = '120%';
        message.style.textShadow = '0 0 1px #7a7a7a79';
        message.style.color = 'red';
        message.innerText = `One point to ${player}.`;

        window.setTimeout(incrementPlayer, 1700);
        function incrementPlayer() {
          let playerCurrent = document.getElementById('player-score').innerText;          
          playerNew = parseInt(playerCurrent) + 1;

          // If 3 points is reached, end the game and display winner on result screen
          if (playerNew === 3) {
            window.setTimeout(gameOverPlayer, 500);
            document.getElementById('player-score').innerText = playerNew;
            document.getElementById('winner').innerText = `Good job friend,
            you won this time.`;
          } else {
            document.getElementById('player-score').innerText = playerNew;
          }
        }
      }

      // If player wins, show message and increment the score
      function arnoldWin() {
        let message = document.getElementById('win-loose-msg');
        let arnoldNew = '';
        message.style.fontSize = '180%';
        message.style.textShadow = '0 0 1px #7a7a7a79';
        message.style.color = 'green';
        message.innerText = 'Arnold wins!';

        window.setTimeout(incrementArnold, 1700);
        function incrementArnold() {
          let arnoldCurrent = document.getElementById('arnold-score').innerText;
          arnoldNew = parseInt(arnoldCurrent) + 1;

          // If 3 points is reached, end the game and display winner on result screen
          if (arnoldNew === 3) {
            window.setTimeout(gameOverArnold, 500);
            document.getElementById('arnold-score').innerText = arnoldNew;
            document.getElementById('winner').innerText = `The winner is
            Aaaaarnooooold!`;
          } else {
            document.getElementById('arnold-score').innerText = arnoldNew;
          }
        }
      }

      function revealImages() {
        document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '100%';
        document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '100%';
      }

      function showResultMessage() {
        document.getElementById('win-loose-msg').style.opacity = '1';
      }

      function hideChoises() {
        document.getElementsByClassName('rps-bg')[0].style.backgroundSize = '0';
        document.getElementsByClassName('rps-bg')[1].style.backgroundSize = '0';
      }

      function hideResultMessage() {
        document.getElementById('win-loose-msg').style.opacity = '0';
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

      function gameOverPlayer() {
        fadeOutGameScreen();
        window.setTimeout(hideGameScreen, 900);
        window.setTimeout(colourWinner, 1000);
        window.setTimeout(selectSassyMessage, 1050);
        window.setTimeout(showResultScreen, 1100);
        window.setTimeout(fadeInResultScreen, 1200);
        window.setTimeout(showWinner, 1700);
        window.setTimeout(showFinalMessage, 2600);
      }

      function gameOverArnold() {
        fadeOutGameScreen();
        window.setTimeout(hideGameScreen, 900);
        window.setTimeout(colourWinner, 1000);
        window.setTimeout(selectBraggyMessage, 1050);
        window.setTimeout(showResultScreen, 1100);
        window.setTimeout(fadeInResultScreen, 1200);
        window.setTimeout(showWinner, 1700);
        window.setTimeout(showFinalMessage, 2600);
      }

      function fadeOutGameScreen() {
        let gameScreen = document.getElementById('game-screen');
        gameScreen.style.opacity = '0';
      }

      function hideGameScreen() {
        let gameScreen = document.getElementById('game-screen');
        gameScreen.style.setProperty('display', 'none');
      }

      // Display winner name and score as green and loser as red
      function colourWinner() {
        let playerScore = document.getElementById('player-score').innerText;
        let playerResult = document.getElementById('player-result');
        playerResult.innerText = playerScore;

        let arnoldScore = document.getElementById('arnold-score').innerText;
        let arnoldResult = document.getElementById('arnold-result');
        arnoldResult.innerText = arnoldScore;

        let playerWin = document.getElementById('player-win');
        let arnoldWin = document.getElementById('arnold-win');

        if (playerScore > arnoldScore) {
          playerWin.style.color = "green";
          arnoldWin.style.color = "red";
        } else {
          arnoldWin.style.color = "green";
          playerWin.style.color = "red";
        }
      }

      // Display random braggy message if Arnold wins
      function selectBraggyMessage() {
        let braggyMessage = document.getElementById('winner').nextElementSibling;
        let braggyMessages = [
          `Naturally, the best machine won. <br>
          Dare to try again?
          `,
          `This was my <br>
          <strong>1763467th</strong> win. <br>
          It's been slow day.
          `,
          `I wonder if someday I will get to<br>
          meet an opponent who can give<br>
          me a real challenge.
          `,
          `This game is actually<br>
          quite complex, I just <br>
          make it look easy.
          `,
          `Fun fact, while winning this game, I also learned everything
          there is to know about quantum mechanics. And mastered the Ukulele.
          `,
          `6`,
          `7`,
          `8`,
          `9`,
          `10`
        ];
        let i = Math.floor(Math.random() * 5);
        braggyMessage.innerHTML = braggyMessages[i];
      }

      // Display random sassy message if player wins
      function selectSassyMessage() {
        let sassyMessage = document.getElementById('winner').nextElementSibling;
        let player = document.getElementById('nickname').value;
        let sassyMessages = [
          `Websters dictionary defines beginner's luck as
          "success when one is a beginner at something". For example,
          "<em>The success of ${player} in this game was just beginner's luck."
          `,
          `You peaked at my choice before we showed, didn't you?
           No judgement. Any tactic is a good tactic, I suppose..
          `,
          `However it is not fair if you keep
          clicking before I am ready. I did not even have
          enough time to run all my calculations..
          `,
          `I appologize. I was a bit preocupied that game.
          I was protecting you from an attack by hackers.
          But good. You managed to win one game while I saved
          the world. So we are both winners, I guess..
          `,
          `There was a glare from the sun right into my
          optical censor. I was blinded that whole game.
          `,
          `6`,
          `7`,
          `8`,
          `9`,
          `10`
        ];
        let i = Math.floor(Math.random() * 5);
        sassyMessage.innerHTML = sassyMessages[i];
      }

      function showResultScreen() {
        let resultScreen = document.getElementById('result-screen');
        resultScreen.style.setProperty('display', 'block');
      }

      function fadeInResultScreen() {
        let resultScreen = document.getElementById('result-screen');
        resultScreen.style.setProperty('opacity', '1');
      }

      function showWinner() {
        document.getElementById('winner').style.opacity = '1';
      }

      function showFinalMessage() {
        document.getElementById('winner').nextElementSibling.style.opacity = '1';
      }


      button.style.borderStyle = 'inset';
      window.setTimeout(afterClick, 100);
      function afterClick() {
        button.style.borderStyle = 'outset';
      }
    });
  }
}


/* --------------------------
----- Play again button -----
-------------------------- */

/**
 * Clicking Play again button starts a chains of timed events
 * to hide result screen and go back to game screen
 */
function playAgainButton() {

  let button = document.getElementsByClassName('play-again-btn')[0];
  button.addEventListener('click', function () {

    document.getElementById('result-screen').style.opacity = '0';

    window.setTimeout(hideResultScreen, 900);
    window.setTimeout(resetGame, 1000);
    window.setTimeout(showGameScreen, 1100);
    window.setTimeout(fadeInGameScreen, 1200);

    button.style.borderStyle = 'inset';
    window.setTimeout(afterClick, 100);
    function afterClick() {
      button.style.borderStyle = 'outset';
    }
  });
}

function hideResultScreen() {
  document.getElementById('result-screen').style.display = 'none';
}

function resetGame() {
  document.getElementById('winner').style.opacity = '0';
  document.getElementById('winner').nextElementSibling.style.opacity = '0';
  document.getElementById('arnold-score').innerText = '0';
  document.getElementById('player-score').innerText = '0';
}

/* --------------------------
----- Footer li buttons -----
-------------------------- */

/**
 * Clicking footer li buttons toggles displayed information on 
 * and off, also can choose to restart game back to home screen
 */
function liButtons() {
  const lis = document.getElementsByClassName('footer-flex-container')[0].children;
  const rules = document.getElementById('rules');
  const aboutMe = document.getElementById('about-me');

  for (const li of lis) {
    li.addEventListener('click', function () {

      if (li === lis[0]) {

        if (rules.style.display === 'block') {
          rules.style.display = 'none';
        } else {
          window.setTimeout(enableRulesExit, 50);
          window.setTimeout(showRules, 100);
          window.setTimeout(fadeInRules, 200);
        }

      } else if (li === lis[1]) {

        if (aboutMe.style.display === 'block') {
          aboutMe.style.display = 'none';
        } else {
          window.setTimeout(enableAboutMeExit, 50);
          window.setTimeout(showAboutMe, 100);
          window.setTimeout(fadeInAboutMe, 200);
        }

      } else {
        location.reload();
      }

      function enableRulesExit() {
        addEventListener('click', function () {
          document.getElementById('rules').style.opacity = '0';
          document.getElementById('rules').style.display = 'none';
          li.style.display = 'block';
        });
      }

      function enableAboutMeExit() {
        addEventListener('click', function () {
          document.getElementById('about-me').style.opacity = '0';
          document.getElementById('about-me').style.display = 'none';
          li.style.display = 'block';
        });
      }
      function showRules() {
        document.getElementById('rules').style.display = 'block';
      }

      function fadeInRules() {
        document.getElementById('rules').style.opacity = '1';
      }

      function showAboutMe() {
        document.getElementById('about-me').style.display = 'block';
      }

      function fadeInAboutMe() {
        document.getElementById('about-me').style.opacity = '1';
      }
    });
  }
}

