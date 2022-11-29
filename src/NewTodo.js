import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div class="container" id="newtaskbox">
        <div class="row">
            <div class="col-10">
                {/* <form onSubmit={this.addTodo} id="add-task"> */}
                <form  id="add-task">
                    <input Onchange={this.props.handleinputchange} value= {this.props.NewINput} type="text" placeholder="Add a new task here..." id="textbox"></input>
                </form>
                {/* <button></button> */}
            </div>
            <div class="col-2" id="submit">
                Submit
            </div>
        </div>
    </div>
    );
  }
}

export default NewTodo;