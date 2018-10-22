# Our git workflow (temporary readme)

## 1. Create your own branch
create a branch, with a descriptive name. 
The name should be in the following format: feature-gitusername, e.g. boardUnitTest-sigurdurKalman.

syntax: **git checkout -b branchname**

## 2. Commit changes like normally
Use descriptive commit messages. If additional details are crucial, append brackets containing the details as such: "change (details)", e.g. "initial commit (source files and npm dependencies added)" 

syntax: **git commit -m "commitmessage"**

## 3. Push to your branch
syntax: **git push -u origin branchname** 

## 4. Create pull request
visit https://github.com/ScrumGang/LateTermAssignment in your browser.  
Click *New pull request*.  
Set *base: master* and *compare: yourbranch*.  
Write a descriptive summary and click *Create pull request*.  

### Note: Minor changes can be merged directly to master
syntax:  
**git checkout master**  
**git pull origin master**  
**git merge branchname**  
**git push origin master**

## 5. Remember to delete your branch after use
After you've implemented the feature the branch was design for you should delete your branch.

local branch:  
syntax: **git branch -d branchname**

remote branch:  
syntax: **git push origin --delete branchname**
