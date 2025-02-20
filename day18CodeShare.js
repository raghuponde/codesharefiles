
NPM and Express.js 
********************
In order to work with react or express.js or next.js and all these  first of all you should know what is node.js. node is one kind of environment where JavaScript will run. Till now What and all  programmes we have written like C#,  C ++ etc  all those programs have an runtime environment means they will execute in some framework or in some ide like C#   executes in Visual Studio IDE so all C# developers depend on .net framework  and visual studio ide for its execution .so in the same manner we have JavaScript developers what a JavaScript  developer  maximum he can write some dynamic code in website design to bring some changes in website but now JavaScript developer want to write some logic as he wants to do as we do in C# so like C# gets executed in ide or run time environment in the same manner I want JavaScript developer to  do coding in JavaScript so  node js provides him that facility .Generally programmers come with the idea of OOPs concepts same thing they cannot implement it in  JavaScript so for that we have framework like angular ,react to implement that and that is possible now using node js .From now onwards js will of course will browser but it will be having node js run time environment where we can do programming with js using languages like angular ,react etc okay .I mean to say I want to do change in back end .

If  u can run the js outside the browser then u can create desktop applications and you can create servers and u can do what ever  u want 

just have a walk through koirala notes once only intially till page 3 okay 
  
What is NPM?

NPM (Node Package Manager) is a tool that comes with Node.js.
It allows you to install, update, and manage dependencies for your project.
It is the largest package registry containing JavaScript libraries and tools.

As you have installed nodejs check version from vscode terminal using below commands whne node is installed along with it npm also installed .

C:\Users\raghavendra\OneDrive\Desktop\practisecheck> node -v
v18.19.1
PS C:\Users\raghavendra\OneDrive\Desktop\practisecheck> npm -v
10.2.4
PS C:\Users\raghavendra\OneDrive\Desktop\practisecheck> 


Now i have to develop the project using npm so first create one folder with the name mynpmproject


go to that project from vs code terminal type npm init

just keep on sayng enter for all prompts he is asking in cmd  to go for default settings so down  u can see the sample 

if the npm init is not working then type this command and proceed further 
Set-ExecutionPolicy Unrestricted -Scope CurrentUser 

Set-ExecutionPolicy Unrestricted -Scope CurrentUser
 C:\Users\raghavendra\OneDrive\Desktop\mynpmproject> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (mynpmproject)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\raghavendra\OneDrive\Desktop\mynpmproject\package.json:

{
  "name": "mynpmproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
PS C:\Users\raghavendra\OneDrive\Desktop\mynpmproject>
PS C:\Users\raghavendra\OneDrive\Desktop\mynpmproje


so if u dont want to press enter try the same command above but its okay now okay : npm init -y
  

now install dependenices as i need to run some server like express.js

npm install express

so node-modules and package json and lock files will be installed there 



This creates a node_modules folder.
Updates package.json and generates package-lock.json.


create an index.js file like this 
---------------------------------

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, NPM!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


now run the server 

node index.js

C:\Users\raghavendra\OneDrive\Desktop\mynpmproject> node index.js
Server running on http://localhost:3000


so hello npm will be shown to me some notification or geenral message i had provieded here okay 


Summary
Step	                            Command
Initialize Project	                npm init
Auto-Initialize	                    npm init -y
Install Dependencies	             npm install <package>
Run Node App                        node index.js


This is how you initialize an NPM project and start using packages efficiently!


now let us do file handling now 


create a neww fodler which is filedemo folder in this u go 

