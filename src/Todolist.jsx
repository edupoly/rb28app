import React from 'react'

function Todolist() {
   
    var [todos,setTodos] = React.useState(['get BMW','clean car']);
   
    function addTodo(){
        var nt = document.getElementById("d1").value;
        setTodos([...todos,nt])
    }
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" id='d1'/>
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