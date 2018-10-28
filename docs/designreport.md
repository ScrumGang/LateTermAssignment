# Design Report
## 1. Introduction
This is a design report for our tic-tac-toe program which describes the classes that we plan on implementing for our console application's functionality. We also go into detail about how our git workflow will be for the duration of the project.
## 2. Class Design
The program splits into the following classes:
### 2.1. Tictactoe
The Tictactoe.js file stitches all the logic classes together into a console program. Tictactoe.js has the following variables and functions:
- **scoreBoard**: Scoreboard variable.
- **gameBoard**: Gameboard variable.
- **sign**: char variable which stores which player has the next move.
- **play()**: function that starts a tic tac toe game.
- **takeInput()**: function that takes in input from the player.
- **startNewGame()**: function that clears the board and sets the current player as x.
### 2.2. Gameboard
The GameBoard.js file is used by the console program and the web app to represent the main game board. The class consists of the following variables and functions:
- **squares**: array of characters that represents the game board.
- **filledSquares**: integer variable that stores the amount of squares that are filled in our gameboard.
- **checkWinner(char sign)**: function that checks if the player represented by the parameter sign has won. The function returns true if he has, else false.
- **fillSquare(char sign, int input)**: function that takes in a character that’s either X or O which represents a player and an integer between 1 and 9 which represent a square in the gameboard.
- **isValidInput(int square)**: function that takes in an integer as a parameter that represents a square in the gameboard and checks if the square is empty and therefor valid.
- **clearBoard()**: function that changes every square to “ “ and resets the filledSquares variable.
- **isfull()**: function that checks if every square in the game board is filled.
### 2.3. Scoreboard
The ScoreBoard.js file is used by the console program and web app to represent a score board. The class consists of the following variables and functions:
- **xWins**: integer variable that represents the number of wins X has
- **oWins**: integer variable that represents the number of wins Y has
- **raiseWins(char sign)**: function that takes in a character that represents either player X or O and increments xWins or oWins.
- **clearScores()**: function that sets oWins and xWins to 0
## 3. Git Workflow
We use git and [Github](https://github.com/) for our source controlling needs. We agreed on a set of rules regarding our git workflow. This chapter will explain it in greater detail.
### 3.1. Branch Structure
We thought about what kind of branch structure to use for out git workflow. We initially thought about using a main development branch in addition to the master branch, as well as individual feature branches that we use when implementing said feature. This seemed like quite the overkill since we won’t be releasing every version of master, making it function just like the development branch. So instead we will be using a master branch along with individual feature branches.
### 3.2. Merging
We use pull requests to merge feature branches with master. Once a pull request is opened, another member of the team has to verify the commit by reading the code and the automatic tests by CircleCI and accept the pull request if it passed inspection. This adds a second layer of verification to each merge. Once a pull request is accepted, we delete the branch, unless we plan on using the branch in the near future.
