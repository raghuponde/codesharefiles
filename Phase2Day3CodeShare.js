
Redux in React
Redux is a state management library for JavaScript applications, commonly used with React. It helps manage application state in a predictable manner by using a centralized store.

Why Use Redux?
React’s built-in state management works well for small applications, but as the app grows, managing shared state between multiple components can become complex. Redux provides:

A single source of truth (centralized state)
Predictable state updates using pure functions (reducers)
Easier debugging with tools like Redux DevTools
Scalability for large applications


All of crete a new app in your day 3 folder name reduxopedia and do intial set up means in public copy logo pics into images folder means create folder images in src and move the images 
over there and keep index.js and css and app.js and css files and package json files keepand remaining all delete it 

so in public folder index.hmtl and manifest file if u want keep it or remove it but in public folder index.html file should be there 

REDUXOPEDIA
│── node_modules
│── public
│   │── index.html
│   │── manifest.json
│── src
│   │── images
│   │   │── logo192.png
│   │   │── logo512.png
│   │── App.css
│   │── App.js
│   │── index.css
│   │── index.js
│   │── setupTests.js
│── package-lock.json
│── package.json
│── README.md


index.js 
-----------
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



App.js 
---------
  
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Hello world</h1>
    </div>
  );
}

export default App;

