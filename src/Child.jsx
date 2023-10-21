import React,{useState} from 'react'

function Child(props) {
    var [y,setY]=useState("Gubbala")
  return (
    <div className='mybox'>
        <h1>Child:{props.p1}</h1>
        <button onClick={()=>{props.f1(y)}}>lets call parent function</button>
    
    </div>
  )
}

export default Child