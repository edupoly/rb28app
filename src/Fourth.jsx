import React, { useContext } from 'react'
import { MyContext } from './Mycontext'

function Fourth() {
    var b = useContext(MyContext)
  return (
    <div className='mybox'>
        <h1>Fourth:{b}</h1>
    </div>
  )
}

export default Fourth