
State and UseState in react 
---------------------------
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

create an new app  with the name counterdemo in Day19 folder and close the vscode and again open that app folder using vscode only 

npx create=react-app counterdemo

now from the app delete all unwanted files and keep in the folder App.js and App.css and index.html and index.js and index.css files and also 
keep package.json and package lock json files 
aftter deleting go to index.js and remove deleted refercnes from there like 

import reportWebVitals from './reportWebVitals';

</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


then add one <div> root tag surorind <App/>
then in App.js 
remove 

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

also logo import 




