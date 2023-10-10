# Playtime

![Amiresponsive image]( TODO: Add link )


Link to live website: [ TODO: ADD NAME ]( TODO: ADD LINK )

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
Used ![JSHint](https://jshint.com/) to test for errors and potential problems.<br>
Code has no warnings or errors (Uses ES6 features which needs to be enabled in configuration).

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
| Learn how to play the game | Instructions on how to play is added to introduction screen and also in the footer if user needs reminder while playing |
| Know what the current score is of the game | Current score is displayed next to the players name |
| Know who won the current round | When they winner of each round is determined, a message displays who the winner is | 
| Intuitive and clear navigation of the page | Design a very simple design that is easy to understand and follow | 

### Features

| Feature tested | Expected outcome | Testing Performed | Result | Pass / fail | 
| --- | --- | --- | --- | --- |
| **Header / navigation bar** | 
|  |  |  |  |  |
| **Other features** |
| Form submission |   |  |  |  |
| Form reset |  |  |  |  |  |
| Hover buttons | Show hover effect on mouse-over | Mouse over buttons | Hover effect is displayed |  |


### Browser
Website has been tested on Google Chrome, Microsoft Edge, Safari, and Samsung Internet Browser.

| Feature tested \  On browser | Google Chrome | Microsoft Edge | Firefox | Samsung Internet  |
| --- | --- | --- | --- | --- |
| Click navigation links |  |  |  | |
| Click social media icons |   |  |  |  |
| Internal links on main page |  |  |  |  |
| **Other features** |
| Form submission |  |  |  |  |
| Play recipe video |  |  |  |  |

### Devices
Manually tested on mobile device (Xiaomi 12), tablet (Samsung Galaxy tab S4) laptop, and desktop computer.

| Devices | Expected outcome / responsive | Achived |
| --- | --- | --- | 
| Mobile (Xiaomi 12) | Looks as intended on this small screen size |  |
| Tablet (Galaxy tab S4) | Looks as intended on this screen size |  |
| Laptop (1366x768px) | Looks as intended on medium size screen |  |
| Desktop (1920x1080px) | Looks as intended on big size screen |  |

The desktop computer also tested with Chrome developer tools from 280 px wide screen up to 1920 px.
Several media queries were created to make each feature responsive on different screen sizes. All testing was made on up-to-date browsers. 



## Bugs

### Solved bugs

- Noticed after using the filer: brightness() that I got a compounding effect on footer text which made it even darker. Solved by adding filer: brightness(100%) specifically to the li selector.
- 
- 





### Unfixed bugs

- 