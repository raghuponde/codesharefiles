
Redux in React
Redux is a state management library for JavaScript applications, commonly used with React. It helps manage application state in a predictable manner by using a centralized store.

Why Use Redux?
React’s built-in state management works well for small applications, but as the app grows, managing shared state between multiple components can become complex. Redux provides:

A single source of truth (centralized state)
Predictable state updates using pure functions (reducers)
Easier debugging with tools like Redux DevTools
Scalability for large applications


All of crete a new app in your day 3 folder name reduxopedia and do intial set up means in public copy logo pics into images folder m eans create folder images in src and move the images 
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

now go to index.html page and paste this whole code below which i am giving it to you 

index.html
--------------
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />

  <title>React App</title>
</head>

<body class="m-0" style="background-color: black">
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  
</body>

</html>


Now create one folder components in src folder and add there Header.js file like this 

Header.js 
--------------
 import React from "react";
import logo from "../images/logo192.png";
function Header() {
    return (
        <div className="pt-3 pl-2">
            <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />{" "}
            <span className="h2 pt-4 text-white-50">React Course - ReduxOpedia</span>
        </div>
    );
}
export default Header;
and in index.js 
-----------------
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
   
    
  </React.StrictMode>
);






