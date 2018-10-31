# Administration Manual
## 1. Set up on a fresh Machine
This chapter is a guide on how to get the program up and running and ready for development on a fresh machine. The content of this chapter is a copy of the development manual.
### 1.1. Pulling the Project
The first step is to get the source code onto your local machine. To do that you must clone the project using the following command:
  
HTTPS:
```bash
git clone https://github.com/ScrumGang/LateTermAssignment.git
```
SSH:
```bash
git clone git@github.com:ScrumGang/LateTermAssignment.git
```
### 1.2. Installing Dependencies
To be able to build the project locally, the following dependencies must be installed:
#### 1.2.1. Node.js
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
#### 1.2.2. NPM
NPM is our automatic build tool and most of our plugins rely on that being installed. To install NPM, visit [their website](https://www.npmjs.com/) and install version 6.4.1. 
Once NPM is installed you can verify that the installation was successful by running the following command:
```bash
npm -v
```
which should output **6.4.1**
#### 1.2.3. Express
Once NPM is installed you need to install Express to run the app itself. This is done with the following command (assuming NPM is already installed):
```bash
npm install express --save
```
Once installed, you should be able to run the app by running the following command:
```bash
npm start
```
#### 1.2.4. Jest
Jest is our unit testing plugin. Jest is installed using the following command (assuming NPM is already installed):
```bash
npm install --save-dev jest
```
Once Jest is installed, all unit tests can be run with the following command:
```bash
npm test
```
### 1.2.5. Puppeteer
Puppeteer is our end-to-end testing tool. Puppeteer is installed using the following command (assuming NPM is already installed):
```bash
npm i puppeteer
```
#### 1.2.6. Webpack
We use Webpack to bundle our HTML and JavaScript code into a more distributable format. Webpack is installed using the following command (assuming NPM is already installed):  
  
```bash
npm install --save-dev webpack
```
From there you can just run the following command:
```bash
webpack
```
and all the code should be bundled in a folder called dist, located at the root of the project.
#### 1.2.7. Webpack Dev Server
Having a dev server allows us to build the project and view all changed made dynamically without having to rebuild the project. For that we use the webpack-dev-server plugin, which can be installed with the following command (assuming npm is already installed):
```bash
npm install --save-dev webpack-dev-server
```
Once installed, the dev server can be hosted using the following command:
```bash
webpack-dev-server
```
## 2. Install and Run on Client's Machine
As the title suggests, this chapter instructs how to set up the console program to run on a fresh machine, without having to install a plethora of dependencies.
### 2.1. Create an Executable Artifact
The process of creating an executable console application consists of the following steps:
#### 2.1.1. Install Pkg
In order to convert code into a console application you need to use Pkg. If you haven't already, download it using the following command:
```bash
npm install -g pkg
```
#### 2.1.2. Create Executable Using Pkg
Assuming Pkg installed successfully, you should be able to create a functioning executable using the following command (assuming you are located at the root of the project):
```bash
pkg src/logic/Console.js
```
### 2.2 Deliver Executable Artifact
Once the executable console file has been created, it's time to deliver. The method of distribution doesn't matter as long as the correct file is delivered, since no installation is required.
## 3. Deploy, Run, Maintain
This chapter is a guide for administrators of the future on how to deply, run and maintain the system.
### 3.1. Deploy
In order to deploy a version of the system the following steps must be taken:
#### 3.1.1. Install Heroku
- Visit [Heroku's website.](https://www.heroku.com/)
- Sign up or get the previous admin's login credentials.
- Setup the Heroku toolbelt.
- Push changed using the following commands:
```bash
git push heroku master
```
This should push the changed to our live Heroku server.
### 3.2. Run
Running the app can be done in a few ways. Which method you choose to use depends on the context at each time. The following is a list of methods you can use to run the application:
#### 3.2.1. Run using Node.js
This is the most simple way of running. This should be used if you are trying to test individual Node.js files/classes using the following syntax:
```bash
node file.js
```
#### 3.2.2. Run using NPM start
This method launches the web app in a localhost port. This can be useful to get a quick glance of whether the app is functioning correctly. Remember that the web app uses the /dist directory, so you must use webpack to bundle any changes made, using the following syntax:
```bash
webpack
```
before ultimately running the app using:
```bash
npm start
```
#### 3.2.3. Run using Dev Server
This is the most optimal way of running the app locally. by running the command:
```bash
webpack-dev-server
```
the web app will open in a localhost port that rebundles any changed made and refreshes dynamically. This is optimal when you are developing the app. Note that it may occur that HTML files do not refresh dynamically, in that case just run webpack and relaunch the dev server.
### 3.3. Maintain
Maintaining our system requires that you follow our git workflow.
#### 3.3.1. Branching
Before making any changes to the code base, make sure you create a new branch with a descriptive name:
```bash
git checkout -b featureName-yourGithubName
```
#### 3.3.2. Commit Incrementally
To make the changes you make visible, make sure you commit after every significant change.
#### 3.3.3. Pull Requests
When merging to master you should open a pull request with a descriptive summary of your changes. If your push contains vital information that can't be summarized, use the *write* section to describe them further.  
Other developers can then verify your changes and accept the pull request. 