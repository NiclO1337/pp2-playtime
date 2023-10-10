# Playtime

![Amiresponsive image](https://res.cloudinary.com/dmntcacug/image/upload/v1696879393/pp2-amiresponsive-transparent_il7xxs.png)


Link to live website: [RPS Battle Arena](https://niclo1337.github.io/pp2-playtime/)

<hr>

## Table of contents


* [Testing](#testing)
    * [Automatic testing](#)
        * [Validator testing](#validator-testing)
        * [Lighthouse testing](#lighthouse-testing)
    * [Manual testing](#manual-testing)
        * [User goals](#user-goals)
        * [Features](#features)
        * [Browser](#browser)
        * [Devices](#devices)
    * [Bugs](#bugs)
        * [Solved bugs](#solved-bugs)
        * [Unfixed bugs](#unfixed-bugs)



## Testing

### Automatic testing

### Validator Testing

- HTML
Validated through https://validator.w3.org/#validate_by_input and passed
<br>![Passed without errors](https://res.cloudinary.com/dmntcacug/image/upload/v1693510294/html-validator-pass_lwfaja.jpg)

- CSS
Validated through https://jigsaw.w3.org/css-validator/validator and passed
<br>![Passed without errors](https://res.cloudinary.com/dmntcacug/image/upload/v1693422108/css-validator-pass_xthpbi.jpg)

- JavaScript
checked with [JSHint](https://jshint.com/) to test for errors and potential problems.<br>
Code has no warnings or errors (Uses ES6 features which needs to be enabled in the configuration).

### Lighthouse testing

Used lighthouse to test performance, accessibility, best practices, and search engine optimization of the website. 


#### Main page
Initial test result > result after optimization
<p align="left"><img src="TODO: Add image of lighthouse testing" alt="Initial test result main page" width="300"/></p>



#### Improvements




#### Left to improve
- 





## Manual testing

### User goals

| User goal | How are they achived | 
| --- | --- | 
| Enjoy a fun game | Design a rock paper scissor game and a computer based opponent with an amusing personality | 
| Learn how to play the game | Instructions on how to play is added to introduction screen and also in the footer if user needs a reminder while playing |
| Know what the current score is of the game | Current score is displayed next to the players name |
| Know who won the current round | When the winner of each round is determined, a message displays who the winner is| 
| Know who has won the game | Design a result page to be displayed when a player wins the game | 
| Play again when game is over | Add a "Play again" button so game can be repeated endlessly | 
| Intuitive and clear navigation of the page | Design a very simple design that is easy to understand and follow | 

### Features

| Feature tested | Expected outcome | Testing Performed | Result | Pass / fail | 
| --- | --- | --- | --- | --- |
| **Introduction screen** |
| Theme buttons | Change color theme based on button | Click the button | Theme changes | Pass |
| Form validation | Will not allow player without name | Click 'Play game' without entering name | Warning message is displayed | Pass |
| Form validation2 | Will not allow name longer than 12 characters | Click 'Play game' after entering name longer than 12 characters | Warning message is displayed | Pass |
| Form submission | Entered name displayed while playing | Input name and click 'Play game' | Input is accepted and game starts with name displayed | Pass |
| Play game button | Take user to game screen | Click 'Play game' button | Changes to game screen | Pass |
| **Game screen** |
| Game button: Rock | Play game choosing 'Rock' | Click 'Rock' button | Starts game with Rock chosen | Pass |
| Game button: Paper | Play game choosing 'Paper' | Click 'Paper' button | Starts game with Paper chosen | Pass |
| Game button: Scissor | Play game choosing 'Scissor' | Click 'Scissor' button | Starts game with Scissor chosen | Pass |
| **Result screen** |
| Play again button | Start a new game with same player name and theme | Click 'Play again' button | Starts game over with same theme and name and score 0-0 | Pass |
| **The footer** |
| Button: RPS Rules | Display a popup window with the rules | Click 'RPS Rules' button | A window with RPS rules is displayed | Pass |
| Button: About me | Display a popup window with information about Arnold | Click 'About me' button | A window with information about Arnold is displayed | Pass |
| Button: Restart Home | Go back to introduction screen | Click 'Restart Home' button | Reloads the page to introduction screen | Pass |
| **The footer** |
| Hover buttons | Show hover effect on mouse-over | Mouse over buttons | Hover effect is displayed | Pass |


### Browser
Website has been tested on Google Chrome, Microsoft Edge, Firefox, and Samsung Internet Browser.

| Feature tested \  On browser | Google Chrome | Microsoft Edge | Firefox | Samsung Internet  |
| --- | --- | --- | --- | --- |
| Theme buttons | Pass | Pass | Pass | Pass |
| Form validation | Pass | Pass | Pass | Pass |
| Form validation2 | Pass | Pass | Pass | Pass |
| Form submission | Pass | Pass | Pass | Pass |
| Play game button | Pass | Pass | Pass | Pass |
| Game button: Rock | Pass | Pass | Pass | Pass |
| Game button: Paper | Pass | Pass | Pass | Pass |
| Game button: Scissor | Pass | Pass | Pass | Pass |
| Play again button | Pass | Pass | Pass | Pass |
| Button: RPS Rules | Pass | Pass | Pass | Pass |
| Button: About me | Pass | Pass | Pass | Pass |
| Button: Restart Home | Pass | Pass | Pass | Pass |
| Hover buttons | Pass | Pass | Pass | Pass |


### Devices
Manually tested on mobile device (Xiaomi 12), tablet (Samsung Galaxy tab S4) laptop, and desktop computer.

| Devices | Expected outcome / responsive | Achived |
| --- | --- | --- | 
| Mobile (Xiaomi 12) | Looks as intended on this small screen size | Pass |
| Tablet (Galaxy tab S4) | Looks as intended on this screen size | Pass |
| Laptop (1366x768px) | Looks as intended on medium size screen | Pass |
| Desktop (1920x1080px) | Looks as intended on big size screen | Pass |

The desktop computer also tested with Chrome developer tools from 280 px wide screen up to 1920 px.
Several media queries were created to make each feature responsive on different screen sizes. All testing was made on up-to-date browsers. 



## Bugs

### Solved bugs

- Noticed after using the filer: brightness() that I got a compounding effect on footer text which made it even darker. Solved by adding filer: brightness(100%) specifically to the li selector.
- 
- 





### Unfixed bugs

- 