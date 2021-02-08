## RainSong Application

### Background and Overview

* ${RainSong} is a web application/game that creates UI where if the user clicks on the falling tiles at the right time, it renders music notes and ultimately be able to play a song.

* The tiles may change colors depending on what keyboard the user presses.

### Functionality & MVP

In ${RainSong}, users will be able to:

[ ] change the colors of the tiles by pressing the space bar
[ ] press the tiles that fall down at the right time, rendering a note
[ ] play the song in the background when the user chooses a song to play
[ ] choose the difficulty of a song, changing the speed of the game

In addition, this project will include:

[ ] direction on how to play the game, the set of rules it follows and selection of songs
[ ] different themes of the background

### Wireframe and File Structure
* /dist
    * images
    * main.css
    * main.js
* /src
    * /assets
    * index.js
    * scripts
        * canvas.js
    * styles
        * index.scss
* index.html
* .gitignore
* node_modules
* package.json
* package.lock.json
* postcss.config.js
* README.md
* webpack.common.js
* webpack.dev.js
* webpack.prod.js


### Architecture and Technology
* Javascript
* Tone.js
* Canvas

### Implementation Timeline
* work on setting up the tiles falling down, work on the colors (1 Day 2/8/21)
* work on implementing a note(audio) for the elements; work on the timing (1 Day 2/9/21)
* work on rendering a song that times correctly with the tiles falling down; styling if time (1 Day 2/10/21)
* work on changing the speed of the tiles falling down to control the difficulty setting (1 Day 2/11/21)