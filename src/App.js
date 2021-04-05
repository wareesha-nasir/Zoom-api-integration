import './Add.css'
import { Component} from 'react';
//import Zoom from './zoom';
import AddTodo from './AddTodo'
import Todo from './todo';


class App extends Component {
  state={
    todos:[
      {id:1,task:"cook food"},
      {id:2,task:"clean room"}
    ]
  }

addTodo=(todo)=>{
todo.id=Math.random();
let todos=[...this.state.todos,todo]
this.setState({
  todos:todos
})
}
 deleteTodo =(id)=>{
let todos=this.state.todos.filter(todo=>{
  return todo.id!==id
})
this.setState({
  todos:todos
})
  }

render(){
return (
 <div className="todo-container">
   <h2 className="heading">TODO LIST </h2>
   <AddTodo addTodo={this.addTodo} />
   <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
 </div>
)
} 
}

export default App;