
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
Now in App.css file add this content 
---------------------------------------
 App.css
------------
.App{
text-align: center;
}
.box{
max-width: 200px;
margin: 50px auto;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 10px;
}
p{
margin-top: 20px;
font-size: 24px;
text-align: center;
}
button{
padding: 10px;
margin: 20px 10px;
font-size: 16px;
color: #FFFFFF;
border: 0px;
border-radius: 5px;
cursor: pointer;
}
button.add{
background-color: #18978F;
}
button.sub{
background-color: #EB4747;
}
button.reset{
background-color: #0F3460;
}


App.js 
---------
 
import './App.css';

function App() {
  let count = 0;

  function handleAdd()
  {
    count = count + 1;
    console.log(count);
  }


  return (
    <div className="App">

      <div className='box'>

        <p>{count}</p>
        <button onClick={handleAdd} className='add' >ADD</button>
        <button className='sub'>SUB</button>


      </div>
     
    </div>
  );
}

export default App;
