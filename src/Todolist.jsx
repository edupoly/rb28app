import React from 'react'

function Todolist() {
  React.useEffect(()=>{
    console.log("Todolist useEffect with empty dep array");
  },[])
  React.useEffect(()=>{
    console.log("Todolist useEffect with no dep array");
  })
  return (
    <div className='mybox'>
        <div>Todolist</div>
    </div>
  )
}

export default React.memo(Todolist)