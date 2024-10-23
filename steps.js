//If we want to do somthing with the git then we have to write the command (git init) so that git is 
//activated into our this folder or directory..
//and if we want to check the status of the current directory we can simply type (git status) which will show which files are not tracked from this directory..
//if we want to add any perticular file then we can do this by simply writtng by (git add fileName)..
//if we want to commit any thing then int the our added files then we have to do (git commit -m "What chenges we had done till now.")
//And if we want to see till now what we had commited then we can write the command (git log) it will give me all the commit till now with the time time what i had commited with a perticular hash..
//if we want to staging all the files in my current directory then we can do this by simmply writting (git  add .)

//whenerver we are doing git status then it will show what thing we had changes after the my last commit or my last staging changes means which files i had changes..
//And if we want to see what changes i had done between the last commit and till now in the perticular file then we can do this by simply writting by (git diff fileName)..
//if we want change between what we had done till now and our last version then we can do simply by writiting (git checkou fileName) this we can do in a perticular file also.What things we had change after the previous commit will change to the tings we had done till the previous commit.

//if we want to remove my all the files from the staging area we can do this by simply writing the command (git rm --cachec --r .) and then after we check the git status then it will the files that are iginored..

//if we want to put somr thing in our project but we did not want that other can see this then we can do this by creating a file named as(touch .gitignore) in this file the things we want to 
//not to post we write there we can do for files(simply write the name of the file) and for the adding comment we can do this by(#) and for the extension we can do this by (* .)

//if we want to cloning any work form the github then we can do this by (git clone URL of that perticular clone) now we able to work with it in our local system..

/******IF WE WANT TO WORKING WITH THE BRANCH**** */

//for creating a new branch locally (git branch NEW_BRANCH_NAME).
//Want to see how many total brances are there in total (git branch) and branch which contain (*) is showing the in which current branch we are
//if we want to switch the branch we can do this by (git checkout NEW_BRANCH_NAME)


/****************************GITHUB*********************************/
//if we want to do transfer our existing local repository to the remote then  simply by writing (git remote add origin gitHub reposetory link)
//i have created a remote reposit0ry and i want to transfer all my commit on internate..
//where origin is the name of the remote we can call it any thing but most of the programmer write it like that..
//now our reomte is get ready for the push operation we can do this by (git push -u origin main) where origin is the name of remote and the main is our branch name..
