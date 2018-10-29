# Tictactoe
Tictactoe a Node.js web app built by ScrumGang. The app is currently live on [Heroku.](https://tictactoe-scrumgang.herokuapp.com/) The app is also available in a console application format (see Console-win.exe in the repository).  
A full installation guide can be found in development/administration manual, found in the /docs directory.
Instead this Readme will contain information about some of our automatic build processes.
## Our Continuous Delivery Cycle
### Local Tests
Before pushing commits we encourage all of our developers to test locally using Jest and Puppateer. All of our test suites are run by simply typing in the command:
```bash
npm test
```
### CircleCI
Every time a push it made to a branch in the repository it automatically undrgoes tests on CircleCI. The tests performed by CircleCI are the same ones we perform locally.
### Heroku
Once a commit/merge to master passes all tests on CircleCI, it is automatically deployed on [Heroku.](https://tictactoe-scrumgang.herokuapp.com/)
## Automatic Documentation Generation
Along with our design report, development manual and administration manual, we also have documentation generated automatically by JSDoc. JSDoc uses our the comments in our JavaScript files and generates HTML files in **/docs/JSDocs** when we run the following command:
```bash
npm run-script doc
```
## Authors
- Alex Guðmundsson - [alexve18](https://github.com/alexve18)
- Atli Gíslason - [AtliGisla](https://github.com/AtliGisla)
- Egill Aron Þórisson - [egillt17](https://github.com/egillt17)
- Kjartan Reynir Ólafsson - [Kjartan17](https://github.com/Kjartan97)
- Nökkvi Karlsson - [nokkvikarlsson](https://github.com/nokkvikarlsson)
- Sigurður Kalman Oddsson - [sigurdurKalman](https://github.com/sigurdurKalman)