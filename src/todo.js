import React from 'react';
 const Todo=({todos,deleteTodo})=>{
const TodoList=todos.length?(
    todos.map(todo=>{
return (
<div className="collection-item" key={todo.id}>
    <ul>
        <li>{todo.task}
        
        <img src="delete.png" alt="delete" onClick={()=>deleteTodo(todo.id)}/></li>
    </ul>
   
</div>
      )  })
):
(
   <p className="center">There is no task</p>
)
return(
    <div>
        {TodoList}
    </div>
)
 }
 export default Todo;

