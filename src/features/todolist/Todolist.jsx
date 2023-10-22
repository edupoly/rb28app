import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodo, deleteTodo } from './todolistSlice';
function Todolist() {
    var {todos} = useSelector(state=>state.t)
    var [nt,setNt] = React.useState('');
    var dispatch = useDispatch();
    function handleNt(e){
        setNt(e.target.value)
    }
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{handleNt(e)}}/>
            <button onClick={()=>{dispatch(addTodo(nt))}}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return  <li key={i}>
                                    {todo}
                                    <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist