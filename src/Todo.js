import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

handleDelete(){
  this.props.handleDelete(this.props.id)
}

  render() {
    return (
                <div className="container" id="displayToDos">
                  {/* <p> example to do</p> */}

                  {/* <p>{this.props.text}</p> */}
                  <p>example test</p>
                  <button onClick = {this.handleDelete}>Delete</button>
                </div>
    );
  }
}

export default Todo;