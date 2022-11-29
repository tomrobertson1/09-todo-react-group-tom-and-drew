import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
                <div className="container" id="displayToDos">
                  {/* <p> example to do</p> */}

                  <p>{this.props.text}</p>
                </div>
    );
  }
}

export default Todo;