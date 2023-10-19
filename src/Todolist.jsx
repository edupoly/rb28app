import React from 'react'

function Todolist() {
    var [newTodo,setNewTodo] = React.useState('');
    var [todos,setTodos] = React.useState(['get BMW','clean car']);
    function handleNewTodo(e){
        setNewTodo(e.target.value)
    }
    function addTodo(){
        setTodos([...todos,newTodo])
    }
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{handleNewTodo(e)}}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            {
                todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </div>
    )
}

export default Todolist