import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

// handleDelete(){
//   this.props.handleDelete(this.props.id)
// }

  render() {
    return (
                <article className="ToDo" id={this.props.id}>
                  {/* <p> example to do</p> */}

                  <p>{this.props.text}</p>
                  
                  <p>example test</p>
                  {/* <button onClick = {this.handleDelete}>Delete</button> */}
                  {/* button, text, button */}
                </article>

    );
  }
}

export default Todo;