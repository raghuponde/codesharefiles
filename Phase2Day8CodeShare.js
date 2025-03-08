Just check where i had used Use context programming Phase2Day4CodeShare.cs file in Day4 of drive 
https://drive.google.com/drive/folders/1AKrv_IbdPOVkZJsZ9W1ESrUkK5lHnZ7c?usp=sharing
there once go through ContextApi and createcontext and useContext demos 

just analize the authcontext code there 

Earlier we have used props to transfer properties or some information from parent component to child component
 the same thing I can do with using createContext and useContext hooks from react 
Here you have to first create the context where certain properties or functions you are exporting to all the child components 
 so here I will use create context hook for creating a context Then then then immediately what context you have created create that context provider 
  and export the values and you have to configure the auth provider in the app js as a main parent
  component so that all child components can take the properties and functionalities of Oregon the context class which you have created

<anyname>Context=createContext

<anyname>Provider = ({ children })

in return 
<anyname>ContextProvider.value export it 


so while creating context and 

who is using that context 

impor the file
and will use useContext(<anyname>Context)

so will take the proeprties and and display 

Now go to drive phase 2 Day 8 fodler and download demowithprops folder and do npm install and then just open the application and let us understand

so what I am Do is that this programme which is written in props I will convert into context usage

so you can see here i am sending values in the form of props from App.js to TaskList.js and AddTask.js and from TaskList.js 
to TaskCard as well 

so i want to do this using createContext and useContext i dont want to use props here 

Now in the components folder add TaskContext.js file 
TaskContext.js
--------------
 import { createContext, useState } from "react";

//create a context

export const TaskContext = createContext();

// provider component

export const TaskProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 7825, name: "Edit React Lectures", completed: false },
        { id: 8391, name: "Watch Lectures", completed: false }
      ]);
    
    // function to add a new task
    const addTask = (task) =>
    {
        setTasks([...tasks, task]);
    }

    // funtion to delete a task

    const deleteTask = (id) =>
    {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (

        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            children
        </TaskContext.Provider>
    )

}
next thing is App.js i have to configure this context on top so that all can use my features 

App.js 
----------
 
import React from 'react'
import { useState } from 'react';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
import { TaskProvider } from './components/TaskContext';

export default function App() {

  return (  
    <TaskProvider>
    <div className="App">
 
      <AddTask  />
      <TaskList  />

      </div>
    </TaskProvider>
  )
}

 
