import React from 'react'

function Todolist() {
    var ntRef = React.useRef();
    var [todos,setTodos] = React.useState(['get BMW','clean car']);
   
    function addTodo(){
        var nt = ntRef.current.value;
        setTodos([...todos,nt])
    }
    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" ref={ntRef}/>
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