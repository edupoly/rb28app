
import Counter from './Counter'
import Countries from './Countries';
import React from 'react';
import Todolist from './Todolist';

function App() {

  React.useEffect(()=>{
    console.log("App useEffect with empty dep array")
  },[])

  React.useEffect(()=>{
    console.log("App useEffect with no dep array")
  })

  var [x,setX] = React.useState('')
  var [a,setA]=React.useState(100)
  function handleX(e){
    if(e.target.value==='praveen'){
      console.log("HI")
      setA(45);
    }
    setX(e.target.value)
  }
  return (
    <div className='mybox'>
      <div>Hello Edupoly</div>
      <Countries></Countries>
      {/* <input type="text" onChange={(e)=>{handleX(e)}}/>
      <div>{x}</div>
      {console.log(a)}
      <Counter pp={a}></Counter>
      <Todolist></Todolist> */}
    </div>
  );
}

export default App;
