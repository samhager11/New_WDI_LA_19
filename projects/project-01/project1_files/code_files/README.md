

jQrack:

Javascript and JQuery based Two Player Versus Game

A two-player game that pits the jQuery knowledge of one player against the other. The trivia questions cover an assortment of topics from the jQuery library and are designed to test your lightning quick knowledge of jQuery.

Each player is tasked with answering questions within the allotted time and is awarded points for correct answers. But be careful! Each correct answer is worth 10 points, while each wrong answer selected will take 3 points away from your score.

Game play alternates between players with the current player being indicated by a white box around the player title. Each match plays to 50 points and the game is won when a player has won 3 rounds.

Controls:

Just click the correct answer...if you can.



To Play:



Development process:

Technologies used: HTML / CSS / Javascript + JQuery

By creating a 'Category' object constructor, the game is able to be easily populated with additional question sets following the format described in the javaScript file. The game randomly selects a category and subsequent question from the  category objects, referencing the associative arrays within each to select a question and appropriate answer set based on a randomly generated index selection.

The jQuery and CSS transitions and animations implemented provide an element of excitement to the game play but transtions could be improved with additional refinement and 

Not-Yet-Implemented:

- Bonus rounds that award increased points along with additional categories and questions
- Scoring that dynamically adjusts based on the timer with decreasing points awarded as time ticks away
- Player name and image/avatar able to be input upon game start
- Sound effects and music to add to the game experience
- Ability to import trivia questions of all types from external files
- One player game that can play through questions solo.
- Challenge friends virtually for two player game and share score to social media/scoreboard

User Stories
As a player, I have the option of playing the game without a partner, so that I can enjoy it solo when there's no-one to play with.

The Needy One: As a player, when I load the url jQrack game, I want to receive instructions to play the game, be able to start a new game, choose a category of questions, and play a game against my friend.

The Lone jQuery Wolf: As a player of the jQrack game, I want to be able to free play through trivia questions of my own selection without having to play against another player so I can test my jQuery knowledge all on my own.

The Overachiever: As an administrator of the jQrack game, I want to be able to easily change the categories of questions, and the questions themselves, used in the jQrack game, making it simple to repurpose the jQrack game to trivia about many different topic items.

