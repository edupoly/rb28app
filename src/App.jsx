import React from 'react';
import './App.css';
import Child from './Child';

function App() {

  var ref1 = React.useRef();
  var ref2 = React.useRef();
  var ref3 = React.useRef();
  var ref4 = React.useRef();

  React.useEffect(()=>{
    ref1.current.focus();
  },[])
  function focusNextBox(e){
    if(e.key==='Enter'){
      ref2.current.focus();
    }
  }
  function focusChildInputBox(e){
    if(e.key==='Enter'){
      ref3.current.focus();
    }
  }
  function focusParentNextInputBox(e){
    if(e.key==='Enter'){
      ref4.current.focus();
    }
  }
  return (
    <div className="mybox">
      <h3>App Component</h3>
      <input type="text" ref={ref1} onKeyUp={(e)=>{focusNextBox(e)}}></input>
      <br />
      <input type="text" ref={ref2} onKeyUp={(e)=>{focusChildInputBox(e)}}></input>
      <br />
      <Child ref={ref3} fn1={focusParentNextInputBox}></Child>
      <br />
      <input type="text" ref={ref4}/>
    </div>
  );
}

export default App;
