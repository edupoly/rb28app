import React from 'react'
import Third from './Third'
import { MyContext } from './Mycontext'

function Second() {
  return (
    <MyContext.Consumer>
        {
            (data)=>{
                return(
                    <div  className='mybox'>
                        <h1>Second:{data}</h1>
                        <Third></Third>
                    </div>
                )
            }
        }
    </MyContext.Consumer>
  )
}

export default Second