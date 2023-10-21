import React, { useContext } from 'react'
import Fourth from './Fourth'
import { MyContext } from './Mycontext'

function Third() {
    var a = useContext(MyContext);
    console.log(a)
  return (
    <div  className='mybox'>
        <h1>Third:{a}</h1>
        <Fourth></Fourth>
    </div>
  )
}

export default Third