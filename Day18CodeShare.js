
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


 formula for filter  
----------------------
 
array.filter((element)=>(condition))

var arr2 = [10, 20, 30, 40, 50]
let filtered = arr2.filter((element) => element > 20);
console.log(filtered);

const people2 = [
{ id: 1, name: 'Felipe', country: 'DR' },
{ id: 2, name: 'Scott', country: 'USA' },
{ id: 3, name: 'Jennifer', country: 'Canada' },
  { id: 4, name: 'Marry', country: 'USA' }
]


const peoplesinUSA = people2.filter(person => person.country=='USA');
console.log(peoplesinUSA);

you want names only means 


const peoplesinUSA = people2.filter(person => person.country=='USA').map(person=>person.name);
console.log(peoplesinUSA);

What is React?
---------------------------
   • React is Front End Javascript Framework
   • React is Declarative
   • React is Composable / Component based
   • React is FAST!
   • Maintained by META
   • React is responsible for maintaining/managing the UI Aspect.
---------------------------
https://legacy.reactjs.org/docs/react-component.html
https://legacy.reactjs.org/docs/getting-started.html#try-react
https://legacy.reactjs.org/docs/add-react-to-a-website.html

so first i created one folder  reactproject1 and in that folded added index.html and index.js files 
  and the added some online libraries into html page like this
index.html
-------------
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"
crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="index.js" type="text/babel"></script>
</head>
<body>
<h1>Hello World</h1>
<div id="root">
</div>
</body>

</html>

and in index.js file write like this
--------------------------------------------------
ReactDOM.render(<p>Hello World from react</p>,
document.getElementById("root"));

if u run index.html in the root tag data  is coming from js file 

so here in root division tag i will render the paragraph information .Open it in live server so here
we have to decide what we have to render and where to render that

so recommended approach is like this in js file



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<h1>React Course </h1>
<p>We will learn react in this course </p>
);

here i will get error if idont put rot <div> tag becasue more elements u are adding use <div> tag

  const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
<h1>React Course </h1>
        <p>We will learn react in this course </p>
        </div>
);
or in compact way also u can write it in js file 

ReactDOM.createRoot(document.getElementById("root")).render(<div>
<h1>React Course </h1>
<p>We will learn react in this course </p>
</div>);
  
so now use react command create a react app now 


https://create-react-app.dev/

now check this website above 

npx create-react-app my-app

so go to one folder for me day18 is the folder open that folder in vs code 
from terminal type this command 
npx create-react-app reactapp1  (see dont use capital letters it wont work and dont use space etc )
then close the vs code and  from vs code open reactapp1 and 
run the command npm start from the terminal

now in the public folder delete all files except index.html and two logos 

and in src folder also delete all except index.js file and package json and apckage lock and git ignore 
anyhow they are outside src

then go to index.js file remove references 

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


App in strict mode u can remove 

remove down 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

and write 

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <h1> Hello World </h1>
  </React.StrictMode>
);



hello world  and run the program agan n



i am showing some data here hello world here so i want to keep that data in a component 
and i want to show 
so what is  a component

What is Component?
---------------------------
   • A component is a small, reusable piece of code that 
     defines a part of a user interface.
   • They can be reused throughout an application, making it 
     easier to build and maintain large, modular applications.
   • Components can be nested inside other components to 
     create complex user interfaces.
---------------------------
--This componet is nothing  but a function which will return some design code 
and in that design code i can embeed variables,constant and functions into it means i can 
add C# code also here what ever i am returning in the design of component is actually not html code 
it is jsx code we call it as 

function MainBody()
{
return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

put this in js file and so compete code is here 

import React from 'react';
import ReactDOM from 'react-dom/client';


function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainBody />
    <MainBody/>
  
  </React.StrictMode>
);


if strict mode is not there use root tag like this 

import React from 'react';
import ReactDOM from 'react-dom/client';


function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MainBody />
    <MainBody/>
  
</div>
);

in the same manner creating header and footer commponent and subsitituing 

import React from 'react';
import ReactDOM from 'react-dom/client';

function Header()
{
return(
   <h1> The react Course </h1>
     )
}
function Footer()
{
return (
      <h1> This is footer </h1>
      )
}
function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <MainBody />
    <Footer></Footer>
  
</div>
);

i want to create nested components for header two sub headers i will create 

import React from 'react';
import ReactDOM from 'react-dom/client';

function MainHeader()
{
return (<h1> The react Course </h1>);
}
function SubHeader()
{
return (<h2> The course is very exciting </h2>);
}
function Header()
{
return(
       <div>
    <MainHeader />
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
      <h1> This is footer </h1>
      )
}
function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <MainBody />
    <Footer></Footer>
  
</div>
);

JSX Components
---------------------------
   • Component Names must be Pascal Casing
       function Footer() { }    <Footer />

   • Props must be camel casing
       <input maxLength={5} readOnly="false">

   • Inline style is an object so it must be enclosed in double curly brackets
       <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>

   • Integer in props will go in {} and "" will be string, and bool goes in {}
       <input maxLength={5} readOnly={false} placeholder="Ben">

   • ‘class’ needs to be replaced with ‘className’
       <h1 className="heading1">
---------------------------
goto this is bootstrap link page and in this
https://getbootstrap.com/docs/5.3/getting-started/introduction/
css link

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
js link

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
in index.html page 

and I had also added one style.css file in CSS folder of src folder here CSS is a new folder here
i added okay and put these classes there in style.css

.heading2 {
color:brown;
font-size: large;
}


.h2 {
color: chocolate;

}
after adding abve 
index.js file 
--------------
  import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

function MainHeader()
{
  return
  (
    <div>
      
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}
function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <MainBody />
    <Footer></Footer>
  
</div>
);

Now  shifted logos into images folder and using it in index.js file like this 

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import logo from "./images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}
function MainBody()
{
  return (
          <div>
          <p>In this course we learn react by building taskopedia </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody />
    <Footer></Footer>
  
</div>
);


Inside the components i can add some variables also and i can subsititue like this 

function MainBody()
{
  const variable1 = "taskopedia";
  let count = 3;
  return (
          <div>
          <p>In this course we learn react by building {variable1} for {count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

so i had modified above compoent and you also modify and see the output

Now i am adding a new component which is studnets compoent 

see the code here how i had added that component 

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import logo from "./images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}
function MainBody(variable1,count)
{

  return (
          <div>
          <p>In this course we learn react by building {variable1} for {count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

function Students(){
const fullName = "Kris Walley";
const programmingExp = 2;
return(
    <div className="container p-4">
    <div className="row">
    Students Enrolled
    </div>
    <div className="row border">
    <div className="col-2">
    <img src={`https://randomuser.me/api/portraits/women/20.jpg`}
    className='w-100'></img>
    </div>
    <div className="col-10">
    {fullName}<br/>
    Programming Experience {programmingExp} years </div>
    </div>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody   variable1={taskopedia} count={3} />
    <Students/>
    <Footer></Footer>
  
</div>
);

Here  if i keep more <Students/> for every student i am getting same image and values so i want to pass thsese
parameters not from the component inside from outside where they have declared from there 

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import logo from "./images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}
function MainBody({ variable1, count })
{
  
  return (
          <div>
          <p>In this course we learn react by building {variable1} for {count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

function Students({ fullName, programmingExp, headspot }){

return(
    <div className="container p-4">
    <div className="row">
    Students Enrolled
    </div>
    <div className="row border">
    <div className="col-2">
    <img src={headspot}
    className='w-100'></img>
    </div>
    <div className="col-10">
    {fullName}<br/>
    Programming Experience {programmingExp} years </div>
    </div>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody variable1="taskopedia" count={3}   />
    <Students fullName="radhakumari" programmingExp={4}  headspot="https://randomuser.me/api/portraits/women/40.jpg"/>
    <Students  fullName="rajeshkumar" programmingExp={3}  headspot="https://randomuser.me/api/portraits/men/40.jpg"  />
    <Students  fullName="sanjaana" programmingExp={2}  headspot="https://randomuser.me/api/portraits/women/90.jpg"/>
    <Footer></Footer>
  
</div>
);

if u dont want to pass like this explicitly u can use  props proeprty here functions like this and you have to say 
props.variableame

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import logo from "./images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}
function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}
function MainBody(props)
{
  
  return (
          <div>
          <p>In this course we learn react by building {props.variable1} for {props.count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}

function Students(props){

return(
    <div className="container p-4">
    <div className="row">
    Students Enrolled
    </div>
    <div className="row border">
    <div className="col-2">
    <img src={props.headspot}
    className='w-100'></img>
    </div>
    <div className="col-10">
    {props.fullName}<br/>
    Programming Experience {props.programmingExp} years </div>
    </div>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody variable1="taskopedia" count={3}   />
    <Students fullName="radhakumari" programmingExp={4}  headspot="https://randomuser.me/api/portraits/women/40.jpg"/>
    <Students  fullName="rajeshkumar" programmingExp={3}  headspot="https://randomuser.me/api/portraits/men/40.jpg"  />
    <Students  fullName="sanjaana" programmingExp={2}  headspot="https://randomuser.me/api/portraits/women/90.jpg"/>
    <Footer></Footer>
  
</div>
);

Now let us seperate all components into category from this index.js file if we are seperating compoenets we have to export the componets in order 
to import by some one 

create one folder layouts put there Header and footer components and also main body 
create one fodler students and put theere students component 

fnal codes passting 

index.js 
-----------
  import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Layouts/Header';
import Footer from './Layouts/Footer';
import { Students } from './students/Student';
import { MainBody } from './Layouts/MainBody';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody variable1="taskopedia" count={3}   />
    <Students fullName="radhakumari" programmingExp={4}  headspot="https://randomuser.me/api/portraits/women/40.jpg"/>
    <Students  fullName="rajeshkumar" programmingExp={3}  headspot="https://randomuser.me/api/portraits/men/40.jpg"  />
    <Students  fullName="sanjaana" programmingExp={2}  headspot="https://randomuser.me/api/portraits/women/90.jpg"/>
    <Footer></Footer>
  
</div>
);

Header.js
----------
  
import logo from "../images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
function Header()
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}

export { Header };

Footer.js
----------
  export default function Footer()
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}

MainBody.js
----------

function MainBody(props)
{
  
  return (
          <div>
          <p>In this course we learn react by building {props.variable1} for {props.count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}


export {MainBody}

Student.js
-----------
export function Students(props){

return(
    <div className="container p-4">
    <div className="row">
    Students Enrolled
    </div>
    <div className="row border">
    <div className="col-2">
    <img src={props.headspot}
    className='w-100'></img>
    </div>
    <div className="col-10">
    {props.fullName}<br/>
    Programming Experience {props.programmingExp} years </div>
    </div>
    </div>
)
}

copy this CDN url into index.html file


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

in the head tag u can copy 

Add new component now in students folder 

StudentReview.js
-----------------
import React from "react";
export default function StudentReview()
{
return (
<div className="p-2">
<i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
<i class="bi bi-hand-thumbs-down-fill text-danger"></i>
</div>
);
}
The above component I want to use it in student component so if i do that then it will be
available for all the students so for some specific students only i want to make it available say
first two students okay


Student.js
------------
  export function Students(props) {
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled
            </div>
            <div className="row border">
                <div className="col-2">
                    <img src={props.headspot} className="w-100" alt="student" />
                </div>
                <div className="col-8">
                    {props.fullName}<br />
                    Programming Experience {props.programmingExp} years
                </div>
                <div className="col-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

thenin index.js file 

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Layouts/Header';
import Footer from './Layouts/Footer';
import { Students } from './students/Student';
import { MainBody } from './Layouts/MainBody';
import StudentReview from './students/StudentReview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody variable1="taskopedia" count={3}   />
    <Students fullName="radhakumari" programmingExp={4} headspot="https://randomuser.me/api/portraits/women/40.jpg">
    <StudentReview/>
    </Students>
    
    <Students  fullName="rajeshkumar" programmingExp={3}  headspot="https://randomuser.me/api/portraits/men/40.jpg"  />
    <Students  fullName="sanjaana" programmingExp={2}  headspot="https://randomuser.me/api/portraits/women/90.jpg"/>
    <Footer></Footer>
  
</div>
);

Add this extension 

VS Code ES7+ React/Redux/React-Native/JS snippets into you vscode 

now i want to convert all functions into arrow functions here arrows functions are used becasue we can implement 
map and filter and other  functions easily using arrow function and code is also fast anf small in arrow functions 
so i am converting all my functions into arrow one 

Footer.js
---------

  const  Footer=()=>
{
return (
    <p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
      )
}

export default Footer

Header.js
-------------

import logo from "../images/logo192.png"
function MainHeader()
{
  return  (
    <div>
        <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
       <h2 className='text-primary'> The React Course </h2>
       <h2 className='heading2'> The React Course2 </h2>
  </div>
  );
}
const subHeaderStyle =
{
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
const Header=()=>
{
return(
       <div>
    <MainHeader/>
    <SubHeader></SubHeader>
       </div>
     )
}

export { Header };

MainBody.js
----------


const MainBody=(props)=>
{
  
  return (
          <div>
          <p>In this course we learn react by building {props.variable1} for {props.count} times </p>
          <ul>
          <li>Call Ben</li>
          <li>Go to walmart</li>
          </ul>
          </div>
      )
}


export {MainBody}

Student.js
-------------
  const Students=(props)=>{
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled
            </div>
            <div className="row border">
                <div className="col-2">
                    <img src={props.headspot} className="w-100" alt="student" />
                </div>
                <div className="col-8">
                    {props.fullName}<br />
                    Programming Experience {props.programmingExp} years
                </div>
                <div className="col-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export  default Students

StudentReview.js
------------------
  import React from "react";
const  StudentReview=()=>
{
return (
<div className="p-2">
<i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
<i class="bi bi-hand-thumbs-down-fill text-danger"></i>
</div>
);
}

export {StudentReview}

index.js
----------
  import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Layouts/Header';
import Footer from './Layouts/Footer';
import  Students  from './students/Student';
import { MainBody } from './Layouts/MainBody';
import { StudentReview } from './students/StudentReview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Header/>
    <MainBody variable1="taskopedia" count={3}   />
    <Students fullName="radhakumari" programmingExp={4} headspot="https://randomuser.me/api/portraits/women/40.jpg">
    <StudentReview/>
    </Students>
    
    <Students  fullName="rajeshkumar" programmingExp={3}  headspot="https://randomuser.me/api/portraits/men/40.jpg"  />
    <Students  fullName="sanjaana" programmingExp={2}  headspot="https://randomuser.me/api/portraits/women/90.jpg"/>
    <Footer></Footer>
  
</div>
);

if u want to create a new component and you want a default arrow template then use like this 

rfc react function component presee enter after creating any file with that file name compent will be creard this is coming because of extension 
rafc react arrow function component 

In react two types of components are there one is funcitonal based component and another is class based component 

now i will convert some of functional components into class based compoents difference 

Class vs Functional Components
---------------------------

Class Components
---------------------------
   • Less common
   • render() method is required, which returns an HTML element
   • Stateful components
   • Class components have lifecycle methods

Functional Components
---------------------------
   • More common
   • render() method is not present, it directly returns an HTML element or nothing
   • Stateless components
   • Class components do have lifecycle methods
   • Hooks!

---------------------------
  StudentReview.js
---------------------
import React from "react";
class StudentReview extends React.Component
{
    render() {
        return (
            <div className="p-2">
            <i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
            <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
            </div>
            );
    }

}


export {StudentReview}

Student.js
----------
import React from "react";

class Students extends React.Component {

    render()
    {
        return (
                <div className="container p-4">
                    <div className="row">
                        Students Enrolled
                    </div>
                    <div className="row border">
                        <div className="col-2">
                            <img src={this.props.headspot} className="w-100" alt="student" />
                        </div>
                        <div className="col-8">
                            {this.props.fullName}<br />
                            Programming Experience {this.props.programmingExp} years
                        </div>
                        <div className="col-2">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
    }

    
}

export  default Students










































































































































































































