import React from 'react'

function Todo(props) {
    console.log(props.t+" rendered")
    function del(){
      props.delTodo(props.idx)
    }
  return (
    <div className='mybox'>
        <b>{props.t}</b>
        <button onClick={()=>{del()}}>Delete</button>
    </div>
  )
}

export default React.memo(Todo)