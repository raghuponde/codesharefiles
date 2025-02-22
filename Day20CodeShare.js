
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








