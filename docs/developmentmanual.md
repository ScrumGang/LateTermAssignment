# Development Manual
## 1. Pulling the Project
The first step is to get the source code onto your local machine. To do that you must clone the project using the following command:
  
HTTPS:
```bash
git clone https://github.com/ScrumGang/LateTermAssignment.git
```
SSH:
```bash
git clone git@github.com:ScrumGang/LateTermAssignment.git
```
## 2. Installing Dependencies
To be able to build the project locally, the following dependencies must be installed:
### 2.1. Node.js
To run any Node.js files locally in your terminal, Node.js must be installed. to install Node.js, visit [their website](https://www.npmjs.com/) and install version 8.12.0  
To verify that it has installed correctly, you can run the following command:
```bash
node -v
```
which should output **v8.12.0**.  
Once installed, you can run node files locally using the following command:
```bash
node filename.js
```
where filename.js is a placeholder for the path to the file you wish to run.
### 2.2. NPM
NPM is our automatic build tool and most of our plugins rely on that being installed. To install NPM, visit [their website](https://www.npmjs.com/) and install version 6.4.1. 
Once NPM is installed you can verify that the installation was successful by running the following command:
```bash
npm -v
```
which should output **6.4.1**
### 2.3. Express
Once NPM is installed you need to install Express to run the app itself. This is done with the following command (assuming NPM is already installed):
```bash
npm install express --save
```
Once installed, you should be able to run the app by running the following command:
```bash
npm start
```
### 2.4. Jest
Jest is our unit testing plugin. Jest is installed using the following command (assuming NPM is already installed):
```bash
npm install --save-dev jest
```
Once Jest is installed, all unit tests can be run with the following command:
```bash
npm test
```
### 2.5. Puppeteer
Puppeteer is our end-to-end testing tool. Puppeteer is installed using the following command (assuming NPM is already installed):
```bash
npm i puppeteer
```
### 2.6. Webpack
We use Webpack to bundle our HTML and JavaScript code into a more distributable format. Webpack is installed using the following command (assuming NPM is already installed):  
  
```bash
npm install --save-dev webpack
```
From there you can just run the following command:
```bash
webpack
```
and all the code should be bundled in a folder called dist, located at the root of the project.
### 2.7. Webpack Dev Server
Having a dev server allows us to build the project and view all changed made dynamically without having to rebuild the project. For that we use the webpack-dev-server plugin, which can be installed with the following command (assuming npm is already installed):
```bash
npm install --save-dev webpack-dev-server
```
Once installed, the dev server can be hosted using the following command:
```bash
webpack-dev-server
```
