import React from 'react'
import { useState } from 'react'
import Child from './Child';

function Parent() {
    var [x,setX]=useState('Praveen');
    var [l,setL]=useState('')
    function abc(a1){
        setL(a1)
    }
  return (
    <div className='mybox'>
        <h3>Parent:{x}-{l}</h3>
        <Child p1={x} f1={abc}></Child>
    </div>
  )
}

export default Parent