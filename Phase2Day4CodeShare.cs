
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
