
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


so you can go to these links and get some knowledge theortially and practically from these links about redux 

 https://react-redux.js.org/ 
https://redux-toolkit.js.org/  

Not that much impotant now what u do in from the terminal means open another terminal and write the below command 


npm install @reduxjs/toolkit react-redux


now then inside src create new folder redux and in that folder again file with the name store.js

store.js 
---------
  import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
   
  },
});


// here i am configurig store so for an application i will create one store and 
//all compoenents will use that store this is like you are using one database kind 
//for all the components okay 
 

Then go to index.js and configure the store means all components should be able to acccess that store for that purpose i am writing liek this 

and this store is mainly wrapped in provider class so index.js file 

index.js 
---------
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
 
      <Header />
   
    </Provider>
  </React.StrictMode>
);


// so header or any other component will use store that is why kept on the top and 
//also u have to include provider namespace also okay the application will be same
//as still this store i had not used any where okay ..
// so here provider is something which will wrap the complete application 
// through provider u can modify the global store which is store 



Now i want to work on the store which u created above

now create one compoent Counter.js in components folder 

Counter.js 
---------
 import React from "react";

function Counter() {
    return <div>Counter</div>;
}

export default Counter;


Inside redux folder create a new folder which is slice and in that create a file with the name counterSlice.js 

here i am slicing my redux store or you can say i am splitting so there will be different components in the project so


REDUXOPEDIA
│── node_modules
│── public
│   │── index.html
│   │── manifest.json
│── src
│   │── components
│   │   │── Counter.js
│   │   │── Header.js
│   │── images
│   │   │── logo192.png
│   │   │── logo512.png
│   │── redux
│   │   │── slice
│   │   │   │── counterSlice.js
│   │   │── store.js
│   │── App.css
│   │── App.js
│   │── index.css
│   │── index.js
│   │── setupTests.js
│── package-lock.json
│── package.json
│── README.md


counterSlice.js
------------------
 import { createSlice } from "@reduxjs/toolkit"

const initalSate = { count: 0 }

export const counterSlice = createSlice({
    name: "counter",
    initialState: initalSate,
    
    reducers:
    {

        increment: (state) => {
            state.count + 1;
        },
        decrement: (state) =>
        {
            state.count - 1;
        }

    },


})

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;



so above is the code for counterSlice.js so when you are working on store it is a reducer and now when in slice it is reducers so i am having a counterSlice which is having a name as counter and intialstate as some intialstate and then we are seeing here reducers okay 

reducers are nothing but actions methods on counter which is increment and decrement method in counter .

so reducers will have all of those actions which are related to that particular slide .

here state is the state of slice it is not the state  of redux store .it is the slice state which u have right here inside the slice only 

Here the advantage of redux is that here i can directly modify the state without using prevState which we were doing in use State okay 

now come to store.js file 

store.js
----------
 import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
    reducer: {

        counterStore:counterReducer

    },
});

console.log(store.getState());
store.dispatch({
    type: "counter/increment",

})

console.log(store.getState());





