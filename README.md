# Sprint 7 project

#Tests for GET, POST, PUT, and DELETE requests.

#Doucmentation used
-https://5e9ce7a7-b9ff-4460-97ac-8b5040458583.serverhub.tripleten-services.com/docs/

#project purpose
This project includes 4 test cases and achieves the following:
-GET
test1 - Getting a kit by id & checking response code validation
test2 - validating response body to contain a item of choice in the selected kit

-PUT
test1 - Changing the kits items 
test2 - response body should validate if items were added/changed in the kit

-POST
test1 - Creating a shopping cart
test2 - response body should validate the courier service 

-DELETE
test1 - deleting an existing order returns a 200 status code
test2 - response body should validate boolean value as true

#Code style
variables used:
-actualStatusCode - used to verify response code status
-actualResponsebody - used to verify response body


#Setup instructions
-Open your preferred terminal emulator. If you’re on Windows, use Git Bash.
create a directory:

 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
  

-Clone the repo.

 # if you are using HTTPS
 git clone https://github.com/username/hm07-qa-us.git
 
 # if you are using SSH
 git clone git@github.com:username/hm07-qa-us.git

-install npm
Before starting your work with the project, run npm install from the console in your project folder. 

-Replace api url
In config.js, replace the API URL with the unique link generated after the launch of Urban Grocers server.

Running the Tests
- Tests can be executed by using the command terminal, using the phrase here 'npx jest' followed by the script name you are testing.
- Tests are labeled by get,post,put,delete
- the actions these tests execute are labeled in each test documentation and which api they are testing for the results you receive.
- example of how to run the test script : npx jest getHandlers.test.js