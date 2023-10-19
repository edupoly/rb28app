import React from 'react'

var Child=React.forwardRef(
    function(props,refs) {
        return (
          <div className='mybox'>
              <h4>Child</h4>
              <input type="text" ref={refs} onKeyUp={(e)=>{props.fn1(e)}}/>
          </div>
        )
      }
)

export default Child