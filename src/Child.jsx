import React from 'react'

function Child(props) {
    console.log("child rendered")
  return (
    <div className='mybox'>
        <h3>Child component:{props.p1}</h3>
    </div>
  )
}

export default React.memo(Child)