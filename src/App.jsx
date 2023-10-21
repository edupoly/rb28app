import React from 'react'
import './App.css';
import First from './First';
import { MyContext } from './Mycontext';
function App() {
  var [x,setX] = React.useState("Praveen")
  return (
    <MyContext.Provider value={x}>
      <div className="mybox">
        <h1>App Component:{x}</h1>
        <First></First>
      </div>
    </MyContext.Provider>
  );
}

export default App;
