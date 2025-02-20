
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


create a new folder which is filedemo folder in this u go means go to that folder and type the follwoing command 

npm init -y


next create a new file index.js into that folder 

and in that index.js file write like this in that file 


const fs = require('fs');


require('fs') loads the File System module.
This allows us to perform file operations.


Use fs.writeFileSync() to create and write to a file:

fs.writeFileSync('demo.txt', 'Hello, this is a demo text file.');
console.log('File created and written successfully.');


This creates a file called demo.txt if it doesn’t exist.
If the file already exists, it overwrites the content.
The console logs the success message.

Run the code:

node index.js

Check your folder—you'll see demo.txt with the text inside.


now in the same file index.js write the below code  to read the file 

const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

fs.readFileSync('demo.txt', 'utf8') reads the file.
The second parameter ('utf8') ensures it returns text instead of raw buffer data.

and the present file with earlier code will look like this 

const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello, this is a demo text file.');
console.log('File created and written successfully.');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);


now again run index.js file 

PS C:\Users\raghavendra\OneDrive\Desktop\filedemo> node index.js
File created and written successfully.
File Content: Hello, this is a demo text file.
PS C:\Users\raghavendra\OneDrive\Desktop\filedemo> 

so i am seeing the output like this 

 Appending to a File
Use fs.appendFileSync() to add more content:


fs.appendFileSync('demo.txt', '\nThis is an appended line.');
console.log('Text appended successfully.');

so overall the file will look like this 

const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello, this is a demo text file.');
console.log('File created and written successfully.');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

fs.appendFileSync('demo.txt', '\nThis is an appended line.');
console.log('Text appended successfully.');



Adds a new line to demo.txt without overwriting existing data.


Renaming a File

Use fs.renameSync() to rename a file:


fs.renameSync('demo.txt', 'new-demo.txt');
console.log('File renamed successfully.');

so the file will look like this 

const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello, this is a demo text file.');
console.log('File created and written successfully.');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

fs.appendFileSync('demo.txt', '\nThis is an appended line.');
console.log('Text appended successfully.');



fs.renameSync('demo.txt', 'new-demo.txt');
console.log('File renamed successfully.');


so u can check a new file will be created with the same content but name changed 


every time u have to run node index.js file okay any chnage u do in index.js in terms of requirement okay 


finally deleting the file

Deleting a File
Use fs.unlinkSync() to delete a file:


fs.unlinkSync('new-demo.txt');
console.log('File deleted successfully.');

si it works so this all about express.js now what and all i am doing in react in further classes same is done in express also so 
I am direclty jumping into react .js code now okay .



 Asynchronous File Operations
All the above methods were synchronous (blocking).
For non-blocking operations, use asynchronous methods:

Writing a file (Async)

fs.writeFile('async-demo.txt', 'Async file content.', (err) => {
    if (err) throw err;
    console.log('Async file created.');
});

Reading a file (Async)

fs.readFile('async-demo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Async File Content:', data);
});

Deleting a file (Async)

fs.unlink('async-demo.txt', (err) => {
    if (err) throw err;
    console.log('Async file deleted.');
});
These do not block execution and use callbacks for error handling.

🎯 Summary Table
Operation	Synchronous	Asynchronous
Write File	fs.writeFileSync('file.txt', 'data')	fs.writeFile('file.txt', 'data', callback)
Read File	fs.readFileSync('file.txt', 'utf8')	fs.readFile('file.txt', 'utf8', callback)
Append File	fs.appendFileSync('file.txt', 'data')	fs.appendFile('file.txt', 'data', callback)
Rename File	fs.renameSync('old.txt', 'new.txt')	fs.rename('old.txt', 'new.txt', callback)
Delete File	fs.unlinkSync('file.txt')	fs.unlink('file.txt', callback)


so here we are doing in parts nothing is available as framework at one place so that if i run any one commmand all packages will be there 
for each module i need to install and do the coding and have to configure the things 

Now understand here what is back end and front end 


back end means for the persistance data base means which dont change for that database u are using .net using web api or  online function u are storing that so that  ucan do it in .net and using desing part which is react and angular u will  design and now they have developed back end softwares or libraries also which will help me to write some functions to store dataabase code  eg express.js and ,next.js and etc and front end for those can be expreess only or next only ...

Now i am jumping to total front end framework which is react 

REACT
------
formula for map 
-----------------
variable.map((element)=>print(element))
this map function will always return some value 

here variable is always a collection 
create one folder advjsdemos and add one file reactdemo1.js
and below code write it and test it 

var arr = [10, 20, 30, 40, 50]
arr.map((element) => console.log(element))

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(value => value * value);
console.log(squares);

const people = [
{ id: 1, name: 'Felipe', country: 'DR' },
{ id: 2, name: 'Scott', country: 'USA' },
{ id: 3, name: 'Jennifer', country: 'Canada' },
]
const ids = people.map(person => person.id);
console.log(ids);








  


