
 Now i had added two css files into the components folder and let the TaskList.js be in Components folder only 

 TaskList.js
--------------
import { useState } from 'react';
import  Taskcard  from './Taskcard';
import "./TaskList.css";
import "./AddTask.css";
import "./../App3.css"
export const TaskList = () => {
const [tasks, setTasks] = useState([
{id: 5271, name: "Record React Lectures", completed: true},
{id: 7825, name: "Edit React Lectures", completed: false},
{id: 8391, name: "Watch Lectures", completed: false}
]);
const [show, setShow] = useState(true);
function handleDelete(id){
setTasks(tasks.filter(task => task.id !== id));
}
return (
<section className='tasklist'>
<ul>
<div className='header'>
<h1>TaskList</h1>
<button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
</div>
{ show && tasks.map((task) => (
<Taskcard key={task.id} task={task} handleDelete={handleDelete} />
)) }
</ul>
</section>
)
}

export default TaskList
TaskList.css
-------------
.tasklist ul {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
}

.tasklist .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
    margin-bottom: 30px;
}

.tasklist h1 {
    font-size: 28px;
    text-align: center;
}

.tasklist button.trigger {
    border: 0px;
    border-radius: 5px;
    background-color: blue;
    color: #FFFFFF;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
}


AddTask.css
------------
.addtask {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
}

.addtask form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.addtask label {
    font-size: 20px;
    margin-right: 5px;
}

.addtask input {
    font-size: 18px;
    padding: 7px;
    border: 1px solid #878787;
    border-radius: 5px;
    flex-grow: 1;
    margin: 10px;
}

.addtask input:focus {
    outline: none;
}

.addtask select {
    font-size: 18px;
    padding: 7px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
}

.addtask button {
    font-size: 18px;
    padding: 7px 10px;
    margin: 10px;
}
update this your project upto here now 

so now i want to add a task now in the componenets folder only i want to add tasks 
add a file in componenets folder AddTask.js say rafc enter 

AddTask.js
------------
 import React from 'react'
import "./AddTask.css";
import { useState } from 'react';

export const AddTask = () => {

    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) =>
    {

       setTaskValue(event.target.value)
    }

    const handleReset = () =>
    {
        setTaskValue("");
    }

    return (
      
        <section className="addtask">

            <form >
                
                <input type="text" onChange={handleChange} name="task" id="task" placeholder='enter task name' autoComplete="off" 
                    value={taskValue} />
                <button type="submit" style={{ background: "blue" }}>Add task</button><br/>
             
                <button onClick={handleReset} className='reset' style={{ background: "blue",color:"white" }} >Reset</button>
          </form>
          <p> {taskValue}</p>
        </section>
   
  )
}

again you can update AddTask.css with the below 
------------------------------------------------
 .addtask {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
}

.addtask form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.addtask label {
    font-size: 20px;
    margin-right: 5px;
}

.addtask input {
    font-size: 18px;
    padding: 7px;
    border: 1px solid #878787;
    border-radius: 5px;
    flex-grow: 1;
    margin: 10px;
}

.addtask input:focus {
    outline: none;
}

.addtask select {
    font-size: 18px;
    padding: 7px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
}
    .addtask button {
        font-size: 18px;
        padding: 7px 10px;
        margin: 10px;
        background-color: #129762;
    }
    
    .addtask.reset {
        font-size: 18px;
        padding: 7px 10px;
        margin: 10px;
        background-color: #be3434;
        color: #FFFFFF;
        border-radius: 5px;
        cursor: pointer;
    }

just paste this css for future referecne 

Now i will work on on submit method of form so i am calling a method over there prevent defaults to avoid page refresh and also to remove data after clicking
submit button i am doing handle reset method and finally i am creating a drop and from there doing selection and data type which i am getting there is string
that i am converting into Boolean and what is value of progress that i am using it and supplying it value so just analyze the code you will understand it clearly .

 Modified AddTask.js 
-----------------------
 import React from 'react'
import "./AddTask.css";
import { useState } from 'react';

export const AddTask = () => {

    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) =>
    {

       setTaskValue(event.target.value)
    }

    const handleReset = () =>
    {
        setTaskValue("");
    }

    const handleDropdown = (e) =>
    {
        setProgress(e.target.value);
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const task =
        {
            id : Math.floor(Math.random() * 10000),
                name :taskValue,
                completed:Boolean(progress)
        }
        console.log(task);
        handleReset();
    }

    return (
      
        <section className="addtask">

            <form onSubmit={handleSubmit}>
                
                <input type="text" onChange={handleChange} name="task" id="task" placeholder='enter task name' autoComplete="off" 
                    value={taskValue} />
                <select onChange={handleDropdown} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
               </select>
                        <button type="submit" style={{ background: "blue" }}>Add task</button><br/>
             
                <button onClick={handleReset} className='reset' style={{ background: "blue",color:"white" }} >Reset</button>
          </form>
          <p> {taskValue}</p>
        </section>
   
  )
}

Now i need to add the task object into the current 3 array elements as 4th element okay
i have to add task and using add task component i have to add it TaskList.js so but they both are siblings 
 so not possible to do that so in App3.js file only i will
take the collection of arrays and will work like this for which the code is provided okay .

 so now i am removing the array from taskList to App3 and from App3 tasks and and settaks i am passsing to tasklist and
also to add task also as props 

App3.js 
----------
 import React from 'react'
import { useState } from 'react';
import './App3.css';
import { Header } from './components/Header';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
export default function App3() {

    const [tasks, setTasks] = useState([
    {id: 5271, name: "Record React Lectures", completed: true},
    {id: 7825, name: "Edit React Lectures", completed: false},
    {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    
   
  return (
      <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks}/>
       <TaskList title="Random" subtitle="Test" tasks={tasks} setTasks={setTasks} />
          
   </div>
  )
}


you can see it has taken cutted the array from TaskList.js 

TaskList.js 
--------------
 import { useState } from 'react';
import  Taskcard  from './Taskcard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = ({tasks,setTasks}) => {

const [show, setShow] = useState(true);
function handleDelete(id){
setTasks(tasks.filter(task => task.id !== id));
}
return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
                </div>
                { show && tasks.map((task) => (
                <Taskcard key={task.id} task={task} handleDelete={handleDelete} />
                )) }
            </ul>
        </section>
)
}

export default TaskList

so it is taking as props as it has given it is taking and substituting where is needed the list 

AddTask.js 
-----------
 import React from 'react'
import "./AddTask.css";
import { useState } from 'react';

export const AddTask = ({tasks,setTasks}) => {

    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) =>
    {

       setTaskValue(event.target.value)
    }

    const handleReset = () =>
    {
        setTaskValue("");
    }

    const handleDropdown = (event) =>
    {
        setProgress(event.target.value);
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const task =
        {
            id : Math.floor(Math.random() * 10000),
                name :taskValue,
                completed:Boolean(progress)
        }
      // console.log(task);
//setTasks(task) // this will give error as it is list so chnaged like this below
//setTasks([task])// this will override earlier 3 tasks so finally i will write this we have to follow this rule
        setTasks([...tasks,task])
        handleReset();
    }

    return (
      
        <section className="addtask">

            <form onSubmit={handleSubmit}>
                
                <input type="text" onChange={handleChange} name="task" id="task" placeholder='enter task name' autoComplete="off" 
                    value={taskValue} />
                <select onChange={handleDropdown} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
               </select>
                        <button type="submit" style={{ background: "blue" }}>Add task</button><br/>
             
                <button onClick={handleReset} className='reset' style={{ background: "blue",color:"white" }} >Reset</button>
          </form>
          <p> {taskValue}</p>
        </section>
   
  )
}


so this also is taking tasks and settasks as while adding a new task where it can add we have to provide tasks to him
and how it can add using setTasks only so it is also taking as props tasks and settasks 

so what task i was doing for add task i can do it using useref hook also just analyze the code you will understand here i am attaching it to the control so it is same as usestate but u cannot show or redner the chnaged values on paage like how u you were doing for <p>{taskvalue}</p>

so  addtask text box will behave same only like earleir but instead of usestate  on that text box i will use useref hook 


AddTask.js modified using useRef 
---------------------------------
 import React from 'react'
import "./AddTask.css";
import { useState ,useRef} from 'react';

export const AddTask = ({tasks,setTasks}) => {

 //   const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    const taskRef = useRef("");

    // const handleChange = (event) =>
    // {

    //    setTaskValue(event.target.value)
    // }

    const handleReset = () =>
    {
        // setTaskValue("");
        taskRef.current.value = "";
    }

    const handleDropdown = (event) =>
    {
        setProgress(event.target.value);
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const task =
        {
            id : Math.floor(Math.random() * 10000),
                name :taskRef.current.value,
                completed:Boolean(progress)
        }
      // console.log(task);
//setTasks(task) // this will give error as it is list so chnaged like this below
//setTasks([task])// this will override earlier 3 tasks so finally i will write this we have to follow this rule
        setTasks([...tasks,task])
        handleReset();
    }

    return (
      
        <section className="addtask">

            <form onSubmit={handleSubmit}>
                
                <input type="text"  name="task" id="task" placeholder='enter task name' autoComplete="off" 
                    ref={taskRef} />
                <select onChange={handleDropdown} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
               </select>
                        <button type="submit" style={{ background: "blue" }}>Add task</button><br/>
             
                <button onClick={handleReset} className='reset' style={{ background: "blue",color:"white" }} >Reset</button>
          </form>
          <p> {taskRef.current.value}</p>// on screen i cannot see 
        </section>
   
  )
}

UseEffect :
-----------
 This is also one hook here any function u want to execute may be web api function means how you want to execute it one time u want to execute it 
or if u do some change in some varible means if any change is happneded in one variable then only the function should execute 
so how u want to do it will be decided by useEffect hookk

in this i will use fake server which will have some ready made data 
means i want to use dummy back end or fake back where in some online functions some data is there that data i want to call using some 
function but based on use effect and its dependencise here dependencse means how i am executing the function in use effect 

Here now i will be creating an api and api is generally created at back end now i don't have to learn back end technology like asp.net core i will use fake server
means some dummy kind of server here which is json server okay
https://www.npmjs.com/package/json-server
right now it is looking like this ..later on it can change

create a new app with name shopmate and do intial set up in that remove all files except package two files and let the files of 
App.js ,App.css and index.js and index.css and index.html let it be there let the logos also be there 
configure and once see all are working fine or not 

in app.js remove 

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

and jst  put there hello world and run so this is the intial set up okay 

next 

npm install -g json-server (open a new terminal and from shopmate only u fire this command ) 


PS D:\GreatLearning4\Day20\shopmate> npm install -g json-server
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'milliparsec@4.0.0',
npm WARN EBADENGINE   required: { node: '>=20' },
npm WARN EBADENGINE   current: { node: 'v18.19.1', npm: '10.2.4' }
npm WARN EBADENGINE }

changed 45 packages in 10s

14 packages are looking for funding
  run `npm fund` for details
PS D:\GreatLearning4\Day20\shopmate> 

 next create one fodler in shopmate project data and there add one file with extension db.json 

and add this data in that file 
db.json
--------
{
        "products": 
    [
        {
        "id": 10001,
        "name": "Basics To Advanced In React",
        "price": 99,
        "in_stock": true
        },
        {
        "id": 10002,
        "name": "Django Framework for Beginners",
        "price": 49,
        "in_stock": true

        },
        {
        "id": 10003,
        "name": "The Complete Guide to Backend Development",
        "price": 49,
        "in_stock": true
        },
        {
        "id": 10004,
        "name": "Build a Blockchain from Scratch in Go",
        "price": 19,
        "in_stock": false
        },
        {
        "id": 10005,
        "name": "Build a Blockchain from Scratch in React",
        "price": 199,
        "in_stock": false
        }
   ]
}
so you can say this as an end point through which our front end interacts using react okay
now i have to run json server so from the termnal where u have installed json server from that terminal i will open now
and will type the following command there 

json-server --watch data/db.json --port 8000

and paste the end points localhost:8000/products to see data in web api  

for url 

http://localhost:8000/products/10001  ( for single products)

now add one file in src ProductList.js 

ProductList.js 
------------------
import { useState } from "react"
export const ProductList = () => {

            const [products, setProducts] = useState([]);
            fetch("http://localhost:8000/products")
            .then(response => response.json())
            .then(data => console.log(data));
            return (
            <div>ProductList</div>
)
}



App.js 
--------
 import './App.css';
import { ProductList } from './ProductList';
function App()
{
        return (
        <div className="App">
        <ProductList />
        </div>
        );
}
export default App;


so above i am not storing in products array so now i will do that 

updated ProductList.js 
----------------------
 import { useState } from "react"

export const ProductList = () => {

    
          const [products, setProducts] = useState([]);
            console.log(products);
            fetch("http://localhost:8000/products")
            .then(response => response.json())
            .then(data => setProducts(data));
            return (
            <div>ProductList</div>
            )
}

wheni am trying to set products in products array variable it is going into infinite loop why 

for the above change of code infinite loop is running here every time i am updating the product it is again rendering it and going into infinite loop

To over come this scenario put your code in use effect 

useEffect=(()=>{},[]);

[] means dependency here empty square means one time i will execute 

so to overcome that we use useEffect here it takes two parameters one is function and another is when we need to run this function whether we need to run it
once or we need to run this multiple times or we need to take care of any other dependencies so we need to pass that dependency list into the square bracket
means for that only i will work or any change happens there then only i will work okay
so inside the flower bracket i can write any action okay
when the array is empty the use effect will be called only once


import { useState ,useEffect} from "react"

export const ProductList = () => {

    
          const [products, setProducts] = useState([]);
         console.log(products);
        useEffect(()=>{

            fetch("http://localhost:8000/products")
            .then(response => response.json())
            .then(data => setProducts(data));
         }, []);

               return (
            <div>ProductList</div>
            )
}

now infinite loop issue is not coming 
with display 
-------------
 import { useState ,useEffect} from "react"

export const ProductList = () => {

    
          const [products, setProducts] = useState([]);
         console.log(products);
        useEffect(()=>{

            fetch("http://localhost:8000/products")
            .then(response => response.json())
            .then(data => setProducts(data));
         }, []);

               return (
         <section>
                       {
                           products.map((product) => (
            <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}
            </span>
            </p>
            </div>
)) }
         </section>
            )
}

index.css
--------------
 @import url('https://fonts.googleapis.com/css2?
 family=Poppins:ital, wght@0, 100; 0, 200; 0, 300; 0, 400; 0, 500; 0, 600; 0, 700; 0, 800; 0, 900; 1, 100; 1, 200; 1, 300; 1, 400; 1, 500; 1, 600; 1, 700; 1, 800; 1, 900&f amily=Roboto&display=swap');
 * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  App.css ----------- .App {
    max-width: 1200px;
    margin: auto;
    padding: 0px 15px;
  }

  h1 {
    text-align: center;
    margin: 30px auto;
  }

  .heading {
    font-size: 22px;
    align-items: center;
  }

  .card {
    margin: 15px auto;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    max-width: 600px;
    border-radius: 5px;
  }

  .card .id {
    background-color: #4e06a0;
    font-size: 12px;
    color: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 5px;
    display: inline;
  }

  .card .name {
    font-size: 22px;
    font-weight: 400;
    margin: 20px 0px;
  }

  .card .info {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card .instock {
    background-color: #06a02d;
    font-size: 16px;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
    display: inline;
  }

  .card .unavailable {
    background-color: #a00620;
    font-size: 16px;
    color: #FFFFFF;
      border-radius: 5px;
      padding: 5px;
      display: inline;
    }
    
    button {
      border: 0px;
      border-radius: 5px;
      background-color: #0c68a1;
      color: #FFFFFF;
      cursor: pointer;
      padding: 10px;
      font-size: 20px;
    }
    
    button.onlyStock {
      background-color: #0ca14f;
    }
    
    button.all {
      background-color: #065ba0;
    }



here use effect [] means logic will execute only once now i want to execut the logic when some thing is chnaged 

i will take count variable and put that count variable in [ count] that will dependecny when count chnages logic will execute let us 

see i had modified the code further by keeping All and in stock only to display 

ProductLst.js 
------------------
import { useState, useEffect } from "react"

export const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [url,setUrl] = useState("http://localhost:8000/products");
    console.log(products);
    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [url]); // here also based on url change use effect method will be called 

    useEffect(() => {
        console.log(counter);
    }, [counter]) //if  u modify this counter then only i will consoleit if counter is not there in array 
    //then console .log will be zero onl u are doing it in first button click of counter 

    return (

        <section>
            <div className="filter">
                <button onClick={() => setCounter(counter + 1)}>{counter}</button>
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
            </div>
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}
                        </span>
                    </p>
                </div>
            ))}
        </section>
    )
}

App.css
----------
 .App {
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px;
}

h1 {
  text-align: center;
  margin: 30px auto;
}

.heading {
  font-size: 22px;
  align-items: center;
}

.filter {
  display: flex;
  justify-content: center;
}

.card {
  margin: 15px auto;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  max-width: 600px;
  border-radius: 5px;
}

.card .id {
  background-color: #4e06a0;
  font-size: 12px;
  color: #FFFFFF;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 5px;
  display: inline;
}

.card .name {
  font-size: 22px;
  font-weight: 400;
  margin: 20px 0px;
}

.card .info {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card .instock {
  background-color: #06a02d;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 5px;
  display: inline;
}

.card .unavailable {
  background-color: #a00620;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 5px;
  display: inline;
}

button {
  border: 0px;
  border-radius: 5px;
    background-color: #0c68a1;
    color: #FFFFFF;
    cursor: pointer;
    padding: 7px 10px;
    font-size: 20px;
    display: inline-block;
    margin: 20px 10px;
  }
  
  button.onlyStock {
    background-color: #037c3a;
  }
  
  button.all {
    background-color: #065ba0;
  }

Routing in react
-----------------
 here some pages will be there based on routing i will jump to that page so first create a app with the name routopedia 
and do intial set up of files like done earlier and dont delete logos and dont delete index.html,cssand js fies 
also dont delete App.js and css files and package files 

and then header in app.jsso 

go to index.html file remove all comments section 
and add some bootsrap js and css files like this 
here u can copy complete file no issues here 

index.html
------------
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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-
rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min
.js"
      integrity="sha384-
kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <title>React App</title>
  </head>

  <body style="background-color: black; color: whitesmoke">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

Now add some pages in src folder 

how to add 

right click add new file give some name like Home.js and there write rafc enter 

Home.js 
AboutUs.js
Cryptography.js
Header.js 
Footer.js 
NotFound.js 


first take Header.js okay 

and go to getbootsrap.com and from there search nav bar and put it here 

after putting i changed class to className and where style inline was there  had used {{ 

Header.js
 -----------
 
 import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }} // ✅ React style syntax
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#">cryptogrpahy</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><div className="dropdown-divider"></div></li> {/* ✅ Replaced <hr> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



and now i want a particular version only so
npm i react-router-dom@6.4.3

 
now all pages are in src folder so 

 Header.js 
 ---------
  
import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }} // ✅ React style syntax
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cryptography">cryptogrpahy</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><div className="dropdown-divider"></div></li> {/* ✅ Replaced <hr> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


index.html
 ----------
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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-
rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min
.js"
      integrity="sha384-
kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <title>React App</title>
  </head>

  <body style="background-color: rgb(211, 205, 205); color: black">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

 Header.js 
 -----------
  
import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }} // ✅ React style syntax
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cryptography">cryptogrpahy</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><div className="dropdown-divider"></div></li> {/* ✅ Replaced <hr> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



now here what u are specifying in index.js same thing pat need to be there in header.js 
 
the page is refershing every time when i click links in header it should not happen for that 

 in header code is changed like this 

 Header.js 
 ------------

import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }} // ✅ React style syntax
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                Aboutus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cryptography">
                Cryptogrpahy
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><div className="dropdown-divider"></div></li> {/* ✅ Replaced <hr> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


supoose u  type wrong url the not found page should come so for that * is the url path 

 index.js 
 ---------
  import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CryptoGrpahy } from "./CryptoGrpahy";
import { AboutUs } from "./AboutUs";
import { Home } from "./Home";
import { NotFound } from "./NotFound"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/cryptography" element={<CryptoGrpahy />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


some more pages i am adding like main category is products and under products -->CreateProduct ,DisplayProduct,ProductList 
 so create one folder with name products in src folder and then add 3 pages and rfce do it 

  
  after adding above pages 

 inndex.js 
 -----------
  import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CryptoGrpahy } from "./CryptoGrpahy";
import { AboutUs } from "./AboutUs";
import { Home } from "./Home";
import { NotFound } from "./NotFound"
import DisplayProduct from "./products/DisplayProduct";
import CreateProduct from "./products/CreateProduct";
import ProductList from "./products/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/cryptography" element={<CryptoGrpahy />}></Route>
        <Route path="/products/display" element={<DisplayProduct />}></Route>
        <Route path="/products/create" element={<CreateProduct />}></Route>
        <Route path="/products/list" element={<ProductList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

 Now in header .js 
 ----------------
  
import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }} // ✅ React style syntax
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                Aboutus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cryptography">
                Cryptogrpahy
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/products/create">
                   Createproduct
                  </Link>

                </li>
                <li>
                  <Link className="nav-link" to="/products/list">
                  ProductList
               </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/products/display">
                    Producdisplay
                  </Link>
                </li>

              
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Now for products i want to provide nested routing 

 index.js (nested routes)
 ----------
  import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CryptoGrpahy } from "./CryptoGrpahy";
import { AboutUs } from "./AboutUs";
import { Home } from "./Home";
import { NotFound } from "./NotFound"
import DisplayProduct from "./products/DisplayProduct";
import CreateProduct from "./products/CreateProduct";
import ProductList from "./products/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/cryptography" element={<CryptoGrpahy />}></Route>


        <Route path="products">
          
          <Route path="display" element={<DisplayProduct />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="list" element={<ProductList />}></Route>
        </Route>
      
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);





  





