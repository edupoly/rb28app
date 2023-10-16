import React from 'react';
import './App.css';
import Child from './Child';

function App() {
  
  var a = React.useMemo(()=>{
    return [10,20,30]
  },[])

  var abc = React.useCallback(
    function(){
      console.log("HI")
    },[]
  )


  var [count,setCount]=React.useState(1)

  function inc(){
    setCount(count+1)
  }
  return (
    <div className="mybox">
      <h3>App Component:{count}</h3>
      <button onClick={()=>{inc()}}>Increment</button>
      <Child p1={a} p2={abc}></Child>
    </div>
  );
}

export default App;

// useState,useEffect,useMemo,useCallback