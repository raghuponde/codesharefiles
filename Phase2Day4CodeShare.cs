
When to Use Context API?

When you only need global state for themes, authentication, or simple data.
When Redux is overkill for your application.
When you want to avoid prop drilling.


This example demonstrates how to use Context API and the useContext hook to manage a global authentication state in a React application.

steps
---------
Create a Context (AuthContext.js)
Wrap the Application with the Provider (index.js or App.js)
Consume the Context in Child Components (Login.js and Dashboard.js)
Toggle Authentication State


now create a app with name usecontextdemo


and then do intial set up now which u do 

USECONTEXTDEMO
│── node_modules
│── public
│   │── index.html
│   │── manifest.json
│── src
│   │── App.css
│   │── App.js
│   │── index.css
│   │── index.js
│── package-lock.json
│── package.json
│── README.md


App.js 
--------

import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Hello World</h1>
    </div>
  );
}

export default App;


index.js 
---------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


so this is the left out code after the set up okay 

now add one file with the name AuthContext.js in src folder only 

step 1 :
----------

This context manages the authentication state (logged in or logged out).
so here i am creating a context .

AuthContext.js 
---------------
import React, { createContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  
    function login()
    {
        setIsAuthenticated(true);
    }
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


step 2:
---------
2. Wrap the Application with the Provider (index.js)
Ensure all components have access to AuthContext.


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
 
);

step 3:
--------
3. Create a Login Component (Login.js)
This component will allow users to log in and log out.


import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <div>
            <h2>{isAuthenticated ? "Welcome, User!" : "Please log in"}</h2>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
};

export default Login;


step 4:
---------
4. Create a Dashboard Component (DashBoard.js)
This component will only be accessible when the user is logged in.


import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const DashBoard = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            {isAuthenticated ? <p>Welcome to your dashboard!</p> : <p>Please log in to access this page.</p>}
        </div>
    );
};

export default DashBoard;


step 5:
--------
5. Main Application (App.js)
Include both Login and Dashboard components.


import React from "react";
import Login from "./Login";
import DashBoard from "./DashBoard";

const App = () => {
  return (
    <div>
      <h1>React Context API Example</h1>
      <Login />
      <DashBoard />
    </div>
  );
};

export default App;



How It Works
The AuthContext stores authentication state.
The AuthProvider makes state available to all child components.
The Login component toggles authentication (login and logout functions).
The Dashboard component checks authentication and conditionally displays content.


Output Behavior
Initially: "Please log in" with a "Login" button.
After clicking Login:
"Welcome, User!" is displayed.
"Logout" button appears.
Dashboard becomes accessible.
Clicking Logout:
Reverts to the logged-out state.


Why Use Context API?
✔ Avoids prop drilling (no need to pass props manually).
✔ Simplifies state management without Redux.
✔ Great for global states like authentication, themes, and language settings.

 

Git Basics 
***********
All of you install git in your laptop 

https://git-scm.com/downloads

go to above link and download local git into your laptop 


open gitbash

go to drive https://drive.google.com/drive/folders/1AKrv_IbdPOVkZJsZ9W1ESrUkK5lHnZ7c?usp=sharing

and in phase 2 day 3 reduxopedia download the folder from there into local disk and from there copy this folder after extracting into gitdemos fodler 

so afer pasting it in gitdemos folder u though gitbash again try to reach that routopedia folder okay 

after reaching theee through gitbash write the folowinng commadns to upload in github 


git init 

to make the folder initlized with git it will keep an aye on the fodler which u have created 

then type git status 

it will tell that u have not commited yet means u have not tranferred thses files to any online repository he is sayinng 

so before commiting any files here commit means saving till today like that before commitingn i need to send them to staging state staging state means before getting commited 
that state is called staging state 

git add . this wwill send all files to staging state means before comminting i am sending them to this stage 

now again do 

git status   all will be shown in grren symbol means they are ready to be commited or saved 

git commit -m "first uplaod "

now again git status 

and then say git log 

to see when i had done commit and what is the message 

now i want to upload this folder to github why because my system may crash or for safety reasons i want to uplaod 



  






