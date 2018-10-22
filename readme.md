# Our git workflow (temporary readme)

## 1. Create your own branch
create a branch, with a descriptive name. 
The name should be in the following format: feature-gitusername, e.g. boardUnitTest-sigurdurKalman.

syntax: **git checkout -m branchname**

## 2. Commit changes like normally
Use descriptive commit messages. If additional details are crucial, append brackets containing the details as such: "change (details)", e.g. "initial commit (source files and npm dependencies added)" 

syntax: **git commit -m "commitmessage"**

## 3. Create pull request
visit https://github.com/ScrumGang/LateTermAssignment in your browser. 
Click *New pull request*.
Set *base: master* and *compare: yourbranch*
Write a descriptive summary and click *Create pull request*.