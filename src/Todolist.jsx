import React from 'react'
import Todo from './Todo'
function Todolist() {
    var [todos,setTodos]= React.useState(['get bmw','get villa','books tickets']);
    function addTodo(){
        var ntd = document.getElementById("d1").value;
        setTodos([...todos,ntd])
    }
    var deleteTodo = React.useCallback(function(ind){
        alert(ind)
        alert(JSON.stringify([...todos]))
        var temp = [...todos];
        temp.splice(ind,1);
        setTodos([...temp])
    },[todos])
    return (
        <div className='mybox'>
            <h3>Todolist</h3>
            <input type="text" id="d1"/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            {
                todos.map((todo,i)=>{
                    return (<Todo t={todo} idx={i} delTodo={deleteTodo} key={i}></Todo>)
                })
            }
        </div>
    )
}

export default Todolist