
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


