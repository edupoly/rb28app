import React from 'react'
import Todo from './Todo'
function Todolist() {
    var [todos,setTodos]= React.useState([
        {
            title:'get bmw',
            status:false
        },
        {
            title:'goto gym',
            status:false
        },
        {
            title:'purchase monitor',
            status:true
        },
        {
            title:'goto bp check',
            status:false
        },
    ]);
    function doneTodo(ind){
        var temp = [...todos];
        temp[ind].status=true;
        setTodos([...temp])
    }
    function undoTodo(ind){
        var temp = [...todos];
        temp[ind].status=false;
        setTodos([...temp])
    }
    return (
        <div className='mybox'>
            <input type="radio" />:ALL &nbsp;&nbsp;&nbsp;
            <input type="radio" />:Completed &nbsp;&nbsp;&nbsp;
            <input type="radio" />:Not Completed &nbsp;&nbsp;&nbsp;
            {
                todos.map((t,i)=>{
                    return <Todo task={t} key={i} idx={i} doneTodo={doneTodo} undoTodo={undoTodo}></Todo>
                })
            }
        </div>
    )
}

export default Todolist