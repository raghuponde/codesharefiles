
State and UseState in react 
---------------------------
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

create an new app  with the name counterdemo in Day19 folder and close the vscode and again open that app folder using vscode only 

npx create=react-app counterdemo

now from the app delete all unwanted files and keep in the folder App.js and App.css and index.html and index.js and index.css files and also 
keep package.json and package lock json files 
aftter deleting go to index.js and remove deleted refercnes from there like 

import reportWebVitals from './reportWebVitals';

</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


then add one <div> root tag surorind <App/>
then in App.js 
remove 

 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

also logo import 
Now in App.css file add this content 
---------------------------------------
 App.css
------------
.App{
text-align: center;
}
.box{
max-width: 200px;
margin: 50px auto;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 10px;
}
p{
margin-top: 20px;
font-size: 24px;
text-align: center;
}
button{
padding: 10px;
margin: 20px 10px;
font-size: 16px;
color: #FFFFFF;
border: 0px;
border-radius: 5px;
cursor: pointer;
}
button.add{
background-color: #18978F;
}
button.sub{
background-color: #EB4747;
}
button.reset{
background-color: #0F3460;
}


App.js 
---------
 
import './App.css';

function App() {
  let count = 0;

  function handleAdd()
  {
    count = count + 1;
    console.log(count);
  }


  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button className='sub'>SUB</button>


      </div>
     
    </div>
  );
}

export default App;

here in console.log it is getting incremented count but in screen it is not happening 

if i put like this onClick={handleAdd()} then also count is zero only so 

what is the solution the solution is using usestate 

so take the variable count and put it in one hook which is usestate and assing some default value 

App.js 
--------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(count + 1);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button className='sub'>SUB</button>


      </div>
     
    </div>
  );
}

export default App;

changing other functions also based on usesate 

App.js
----------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(count + 1);
  }

  function handleSub()
  {
    setCount(count - 1);
  }

  function handleReset()
  {
    setCount(0);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button onClick={handleSub} className='sub' >SUB</button>
        <button onClick={handleReset} className='reset' >RESET</button>


      </div>
     
    </div>
  );
}

export default App;

Now u see i can remove handleSub function and  i can write it as inline also like this 

App.js
---------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(count + 1);
  }

  // function handleSub()
  // {
  //   setCount(count - 1);
  // }

  function handleReset()
  {
    setCount(0);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button onClick={()=>setCount(count-1)} className='sub' >SUB</button>
        <button onClick={handleReset} className='reset' >RESET</button>


      </div>
     
    </div>
  );
}

export default App;

so like this above also will work for me 

Now suppose i have a situation where three times i am incrementing like i below code instead of saying diretly + 3 three times +1 i willdo 

App.js
-------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(count + 1);
    setCount(count + 1);
     setCount(count + 1);
  }

  // function handleSub()
  // {
  //   setCount(count - 1);
  // }

  function handleReset()
  {
    setCount(0);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button onClick={()=>setCount(count-1)} className='sub' >SUB</button>
        <button onClick={handleReset} className='reset' >RESET</button>


      </div>
     
    </div>
  );
}

export default App;
so here at a time 3 values are not updated becasue i had kept sequentially it shoudl give me 3 when i click latest value should be 3 but it is not 
happeing here 
means previous value is not remebering here so what is to be done here 

u can write arrow function there like this 

App.js
---------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(count=>count + 1);
    setCount(count=>count + 1);
     setCount(count=>count + 1);
  }

  // function handleSub()
  // {
  //   setCount(count - 1);
  // }

  function handleReset()
  {
    setCount(0);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button onClick={()=>setCount(count-1)} className='sub' >SUB</button>
        <button onClick={handleReset} className='reset' >RESET</button>


      </div>
     
    </div>
  );
}

export default App;

now i can also use PrevState variabel also in the coede 

App.js
--------
 
import { useState } from 'react';
import './App.css';


function App() {

  const [count,setCount] = useState(0);

  function handleAdd()
  {
    //count = count + 1;
    console.log(count);
    setCount(prevCount=>prevCount + 1);
     setCount(prevCount=>prevCount + 1);
      setCount(prevCount=>prevCount + 1);
  }

  // function handleSub()
  // {
  //   setCount(count - 1);
  // }

  function handleReset()
  {
    setCount(0);
  }
 

  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button onClick={()=>setCount(count-1)} className='sub' >SUB</button>
        <button onClick={handleReset} className='reset' >RESET</button>


      </div>
     
    </div>
  );
}

export default App;

Now add another file with the name App2.js after adding say rafc and press enter default code u will get and add the follwing code below
App2.js 
----------
 import React, { useState } from 'react'

export const App2 = () => {

    const [counterState, setCounterSate] = useState(() => { return { counter: 10, title2: "Fun" }; });

    cons[titleState, setTitleSate] = useState("Fun");

    cons[titleState1, setTitleSate1] = useState(()=>{return {  title1: "Fun" }; });


  return (
    <div>App2</div>
  )
}

here above use state can store ananomys class also with proeprties here it can store object also with multiple proeprties 

now thes three usestates i will use in desisng
App2.js 
---------
 import React, { useState } from 'react'

 const App2 = () => {

    const [counterState, setCounterState] = useState(() => { return { counter: 10, title2: "Fun" }; });

    const[titleState, setTitleSate] = useState("Fun");

    const[titleState1, setTitleSate1] = useState(()=>{return {  title1: "Fun" }; });


 function incrementCounter()
    {
    setCounterState((counterState) => { return { counter:counterState.counter + 1 }; });
    }
function decrementCounter()
    {
    setCounterState((prevState) => { return { counter: prevState.counter - 1 } });
    setCounterState((prevState)=>{ return {counter:prevState.counter -1} });
    }
return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">{titleState}Counter </span><br/>
        <span className="h2 pt-4 m-2 text-white-50">{titleState1.title1} Counter </span><br/>
        <span className="h2 pt-4 m-2 text-white-50">{counterState.title2} Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter }</span>
        </span>
        </div>
)
}

export default App2;

Then index.html
-------------
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <title>React App</title>
  </head>
  <body bgcolor="lavendar">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
   
  </body>
</html>
then in 
 Index.js 
----------
 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  App2  from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <App />
    <App2 />
    </div>
  
);

now i want to store in useSate hook array also so create a new file App3.js and write rfc there 

App3.js 
----------
 import React from 'react'

export default function App3() {
  return (
    <div>App3</div>
  )
}


default code will look like this 

now updated code 

App3.js 
---------
import React from 'react'
import { useState } from 'react';

export default function App3() {

  const [tasks, setTasks] = useState([
{id: 5271, name: "Record React Lectures", completed: true},
{id: 7825, name: "Edit React Lectures", completed: false},
{id: 8391, name: "Watch Lectures", completed: false}
]);


  return (
   <div className="App">
     <h1>Task List</h1>
      <ul>

      </ul>
   </div>
  )
}

 udpated App3.js 
-----------------
 import React from 'react'
import { useState } from 'react';
import './App3.css';

export default function App3() {

    const [tasks, setTasks] = useState(
        [
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        { id: 8391, name: "Watch Lectures", completed: false }
        ] 
);


  return (
   <div className="App">
     <h1>Task List</h1>
      <ul>
         {
         
                  tasks.map((task, index) => (
                      
                      
                      <li key={index}>
                          
                          <span>{task.id} -- {task.name}</span>
                          <button className='delete'>Delete</button>
                      </li>
                      
                      
                      
                  ))
                  

          }
      </ul>
   </div>
  )
}

in index.js 
------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  App2  from './App2';
import App3 from './App3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    {/* <App />
    <App2 /> */}
    <App3/>
    </div>
  
);


add one file in src folder App3.css 

App3.css
----------
 .App {
    text-align: center;
}

a {
    text-decoration: none;
    color: #000000;
}

h1 {
    font-size: 28px;
    text-align: center;
    margin: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    border-bottom: 1px solid #d7d7d7;
    font-size: 18px;
    padding: 0px 10px;
}

img {
    max-width: 40px;
}

ul {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

li {
    font: 16px;
    list-style: none;
    margin: 20px 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    box-shadow: rgb(62, 150, 0) 0px 1px 4px;
}

li.incomplete {
    box-shadow: rgba(135, 20, 0, 0.689) 0px 1px 4px;
}

button.delete {
    border: 0px;
    border-radius: 5px;
    background-color: #be3434;
    color: #FFFFFF;
    padding: 5px 10px;
    cursor: pointer;
}

button.trigger {
    border: 0px;
    border-radius: 5px;
    background-color: #0F3460;
    color: #FFFFFF;
    padding: 5px 10px;
    cursor: pointer;
}

.box {
    width: 400px;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px 5px;
    border: 0px;
    border-radius: 5px;
}

.box.success {
    background-color: #baffbf;
}

.box.alert {
    background-color: #ffb4b4;
}

.box.warning {
    background-color: #FFDEB4;
}

.box p {
    margin: 10px;
}

.box p.title {
    font-size: 20px;
}

.box p.description {
    font-size: 14px;
}

.hidden {
    display: none;
}

App3.js 
---------
import React from 'react'
import { useState } from 'react';
import './App3.css';

export default function App3() {

    const [tasks, setTasks] = useState(
        [
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        { id: 8391, name: "Watch Lectures", completed: false }
        ] 
);


  return (
   <div className="App">
     <h1>Task List</h1>
      <ul>
         {
         
                  tasks.map((task, index) => (
                      
                      
                      <li key={index}>
                          
                          <span>{task.id} -- {task.name}</span>
                          <button className='delete'>Delete</button>
                      </li>
                      
                      
                      
                  ))
                  

          }
      </ul>
   </div>
  )
}

Now i  am writing delete funciton code 


App3.js 
---------
 import React from 'react'
import { useState } from 'react';
import './App3.css';

export default function App3() {

    const [tasks, setTasks] = useState(
        [
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        { id: 8391, name: "Watch Lectures", completed: false }
        ] 
);
    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id != id));
    }

  return (
   <div className="App">
     <h1>Task List</h1>
      <ul>
         {
         
                  tasks.map((task, index) => (
                      
                      
                      <li key={index}>
                          
                          <span>{task.id} -- {task.name}</span>
                          <button className='delete' onClick={()=>handleDelete(task.id)} >Delete</button>
                      </li>
                      
                      
                      
                  )) 
                  

          }
      </ul>
   </div>
  )
}

so here i am  actually not deleting the list i am filteting the list based on what matching value is there that which is not matching is shown to me
means which is matching i am not showing in screen so i am using filte operation in the form of delete indirectly 

conditonal display of elelemts i want to do means based on click of button all i wll show or all i will not show 


import React from 'react'
import { useState } from 'react';
import './App3.css';

export default function App3() {

    const [tasks, setTasks] = useState(
        [
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        { id: 8391, name: "Watch Lectures", completed: false }
        ] 
    );
    
    const [show, setShow] = useState(true);
    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id != id));
    }

  return (
      <div className="App">
          
     <h1>Task List</h1>
          <ul>
               <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
         {
                 
              
               show &&   tasks.map((task, index) => (
                      
                      
                      <li key={index}>
                          
                          <span>{task.id} -- {task.name}</span>
                          <button className='delete' onClick={()=>handleDelete(task.id)} >Delete</button>
                      </li>
                      
                      
                      
                  ))
                  

          }
      </ul>
   </div>
  )
}

Next i want complete true to be border blue and not completted to be border red 

chnage li elemment like this 

  <li key={task.id} className={task.completed ? "completed" : "incomplete"}>

and u can see this effect 

App3.js 
---------
 import React from 'react'
import { useState } from 'react';
import './App3.css';

export default function App3() {

    const [tasks, setTasks] = useState(
        [
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        { id: 8391, name: "Watch Lectures", completed: false }
        ] 
    );
    
    const [show, setShow] = useState(true);
    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id != id));
    }

  return (
      <div className="App">
          
     <h1>Task List</h1>
          <ul>
               <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
         {
                 
              
               show &&   tasks.map((task, index) => (
                      
                      
                     <li key={task.id} className={task.completed ? "completed" : "incomplete"}>

                          
                          <span>{task.id} -- {task.name}</span>
                          <button className='delete' onClick={()=>handleDelete(task.id)} >Delete</button>
                      </li>
                      
                      
                      
                  ))
                  

          }
      </ul>
   </div>
  )
}





