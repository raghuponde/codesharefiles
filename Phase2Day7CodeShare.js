CategoryList.js 
------------------
import React, { useState } from 'react';
import { useCategories } from '../services/CategoryService';

const CategoryList = () => {
  const { categories, addCategory, deleteCategory } = useCategories();
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.some((cat) => cat.name.toLowerCase() === newCategory.toLowerCase())) {
      addCategory({ id: Date.now(), name: newCategory });
      setNewCategory('');
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <input 
        type="text" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category" 
        data-testid="category-input"
      />
      <button onClick={handleAddCategory} data-testid="add-category-button">Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category.id} data-testid={`category-${category.id}`}>
            {category.name}
            <button onClick={() => deleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

----------------------------------------------
Dashboard.js 
------------
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import CategoryList from './CategoryList';

const Dashboard = () => {
  return (
    <div>
      <h1>To-Do List Dashboard</h1>
      <p>Learn React by building a task management app.</p>
      <TaskInput />
      <TaskList />
      <CategoryList />
    </div>
  );
};

export default Dashboard;

-------------------------------------------------------------------
TaskInput.js
---------------
import React, { useState } from 'react';
import { useTasks } from '../services/TaskService';
import { useCategories } from '../services/CategoryService';

const TaskInput = ({ existingTask, onEditComplete }) => {
  const { addTask, editTask } = useTasks();
  const { categories } = useCategories();

  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');
  const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : '');
  const [priority, setPriority] = useState(existingTask ? existingTask.priority : 'Medium');
  const [category, setCategory] = useState(existingTask ? existingTask.category : categories[0]?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: existingTask ? existingTask.id : Date.now(), title, description, dueDate, priority, category };
    existingTask ? editTask(task) : addTask(task);
    if (onEditComplete) onEditComplete();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required data-testid="task-title-input"/>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" required data-testid="task-description-input"/>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due Date" required data-testid="task-due-date-input"/>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <button type="submit" data-testid="add-task-button">{existingTask ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskInput;

--------------------------------------------------------------------------------
TaskList.js 
------------
import React, { useState } from 'react';
import { useTasks } from '../services/TaskService';
import TaskInput from './TaskInput';

const TaskList = () => {
  const { tasks, editTask, deleteTask, toggleTaskStatus } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h2>Task List</h2>
      {editingTask ? (
        <TaskInput existingTask={editingTask} onEditComplete={() => setEditingTask(null)} />
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} data-testid={`task-${task.id}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              <p>Category: {task.category}</p>
              <button onClick={() => toggleTaskStatus(task.id)}>Mark as {task.completed ? 'Incomplete' : 'Complete'}</button>
              <button onClick={() => setEditingTask(task)} data-testid={`edit-task-${task.id}`}>Edit Task</button>
              <button onClick={() => deleteTask(task.id)} data-testid={`delete-task-${task.id}`}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

-------------------------------------
App.js 
---------
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { TaskProvider } from './services/TaskService';
import { CategoryProvider } from './services/CategoryService';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;



 CategoryService.js
-------------------------
import { createContext, useContext, useReducer } from 'react';

const ADD_CATEGORY = 'ADD_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

const initialState = {
    categories: [],
};

const categoryReducer = (state, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };
        case DELETE_CATEGORY:
            return { ...state, categories: state.categories.filter((cat) => cat.id !== action.payload) };
        default:
            return state;
    }
};

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const addCategory = (category) => dispatch({ type: ADD_CATEGORY, payload: category });
    const deleteCategory = (id) => dispatch({ type: DELETE_CATEGORY, payload: id });

    return (
        <CategoryContext.Provider value={{ categories: state.categories, addCategory, deleteCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => useContext(CategoryContext);

 TaskService.js
------------------
import { createContext, useContext, useReducer } from 'react';

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';

const initialState = {
    tasks: [],
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
            };
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
        case TOGGLE_TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        default:
            return state;
    }
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const addTask = (task) => dispatch({ type: ADD_TASK, payload: task });
    const editTask = (task) => dispatch({ type: EDIT_TASK, payload: task });
    const deleteTask = (id) => dispatch({ type: DELETE_TASK, payload: id });
    const toggleTaskStatus = (id) => dispatch({ type: TOGGLE_TASK_STATUS, payload: id });

    return (
        <TaskContext.Provider value={{ tasks: state.tasks, addTask, editTask, deleteTask, toggleTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
