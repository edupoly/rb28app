import React from 'react'

function Todo(props) {

    function del(){
      props.delTodo(props.idx)
    }
  return (
    <div className='mybox'>
        <i style={props.task.status===true?{textDecoration:'line-through'}:{}}>{props.task.title}</i>
        <button onClick={()=>{del()}}>Delete</button>
        {
          props.task.status===true && (<button onClick={()=>{props.undoTodo(props.idx)}}>Undo</button>)
        }
        {
          props.task.status===false && (<button onClick={()=>{props.doneTodo(props.idx)}}>Done</button>)
        }

    </div>
  )
}

export default React.memo(Todo)