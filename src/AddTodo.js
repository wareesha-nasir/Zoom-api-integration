import React, { Component } from 'react';
import './Add.css'
class AddTodo extends Component{
    state={
        id:"",
        task:""
    }
handleChange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
})
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state)
}

    render(){
        return(
            <div  >
                <div >
                <form  className="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="add todo" id="task" onChange={this.handleChange} />
                <span><button type="submit">add</button></span>
                
                </form>
                </div>
            </div>
        )
    }
}
export default AddTodo;