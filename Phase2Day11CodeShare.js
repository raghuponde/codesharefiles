The important points 
---------------------------
using useState u have to create controlled controls like on change using set method on controls in the design 

using props u have to pass values from dashboard to child components which it is holding here they are not using router if u keep sub elelemts in main container and if i show that main container which is nothing but dashboard then no need of router 

every component check what it is taking from service and that only u implment it there and pass as context sometimes all it will not export
  all only few it will export and some to other components okay 

first go and write reducer code in service file and then go with context 

in components first desing u do it and later on write other codes in return (   ) 

check test file and according  to  that do design

In the dashboard check what components has to be displayed and from dashboad u will only have to send it by props and go to components and see { what they are taking that only send it in dashboard }

make your familair with writing arrow function and map and filter which are used extensively here 




In category list u are doing both adding and deleting 


but  in Tasklist for adding taskinput.js is there and for  and for siaplying tasklist it can be divided 

you should know how to toggle the design  using useState and it done using ternary operator ? true means first value or secod value 

but when it is null value in useState it is reverse means if   ? true means not null so firt will be displayed otherwise second will be desilayed 


go to day 9 and in folder solvingmilestone folder  and download boilerplatecodeinlocal and say npm install now 


CategoryService.js 
------------------
  import { createContext, useContext, useReducer } from 'react';

// Category actions
const ADD_CATEGORY = 'ADD_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Initial state
const initialState = {
    categories: [],
};

// Category reducer
const categoryReducer = (state, action) => {

    switch (action.type)
    {
        case ADD_CATEGORY:

            return { ...state, categories: [...state.categories, action.payload] };
        
        case DELETE_CATEGORY:

            return { ...state, categories: state.categories.filter((category) => category.id !== action.payload) }
        
        default: return state;


    }


};

// Create context
const CategoryContext = createContext();

// Category Provider
export const CategoryProvider = ({ children }) => {

    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const addCategory = (category) => {
        dispatch({ type: ADD_CATEGORY ,payload:category})
    }

    const deleteCategory = (categoryid) => {
        dispatch({ type: DELETE_CATEGORY,payload:categoryid })        

    }

    return (

        <CategoryContext.Provider value={{ categories: state.categories, addCategory, deleteCategory }}>
            
            {children}

        </CategoryContext.Provider>
    )

};

// Custom hook to use category context
export const useCategories = () => {
    return useContext(categoryContext);
};


categoryList.js 
------------------
import React, { useState } from 'react';
import { useCategories } from '../services/CategoryService';

const CategoryList = () => {
    const { categories, addCategory, deleteCategory } = useCategories();
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            addCategory({ id: Date.now(), name: newCategory });
            setNewCategory('');
        }
    };

    const DeleteCategory = (id) => {

        deleteCategory(id);

    }

    return (
        <div>
            <h2>Categories</h2>
            <input type="text" value={newCategory} placeholder='New Category' onChange={(e) => setNewCategory(e.target.value)} />
            <button onClick={handleAddCategory}>Add  Category</button>
            <ul>
                {
                    categories.map((category) => (

                        <li key={category.id}>
                            {category.name}
                            <button onClick={()=>DeleteCategory(category.id)}>Remove Category</button>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default CategoryList;

Dashboard
--------------
  import React from 'react';
import { useTasks } from '../services/TaskService';
import { useCategories } from '../services/CategoryService';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import CategoryList from './CategoryList';

const Dashboard = () => {
  // const { tasks } = useTasks();
   const { categories } = useCategories();

  return (
    <div>
      <CategoryList />
    </div>

  );
};

export default Dashboard;

App.js 
--------
  import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { CategoryProvider } from './services/CategoryService';
import CategoryList from './components/CategoryList';

function App() {
  return (
  <CategoryProvider>
      <Dashboard />
  </CategoryProvider>
   
    
  );
}

export default App;


TaskService.js
------------------
  import { createContext, useContext, useReducer } from 'react';

// Task actions
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';

// Initial state
const initialState = {
    tasks: [],
};

// Task reducer
const taskReducer = (state, action) => {

    switch (action.type)
    {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>task.id===action.payload.id?{...task,...action.payload}:task)
            };
        
        case DELETE_TASK:
            return {
                ...state,
                tasks:state.tasks.filter((task)=>task.id!==action.payload)

            }
        case TOGGLE_TASK_STATUS:
            return            {
                ...state,
    tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task)
                    
            }
        
        default:
            return state;
    }

};

// Create context
const TaskContext = createContext(taskReducer,initialState);

// Task Provider
export const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, initialState)
    
    const addTask = (task) => {
        
        dispatch({ type: ADD_TASK, payload: task });
    }

    const editTask = (id,taskData) => {
        dispatch({ type: EDIT_TASK ,payload:{id,...taskData}})
    }

    const deleteTask = (taskid) => {
        dispatch({ type: DELETE_TASK ,payload:taskid})
    }

    const toggleTaskStatus = (taskid) => {
        dispatch({ type: TOGGLE_TASK_STATUS ,payload:taskid})
    }

    return (
        <TaskContext.Provider value={{ tasks: state.tasks, addTask, editTask, deleteTask, toggleTaskStatus }}>
         
            {children}

        </TaskContext.Provider>


    )

};

// Custom hook to use task context
export const useTasks = () => {
    return useContext(TaskContext);
};

next see what it is exporting who is using which component is using and what using 






  
