import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div className="container" id="newtaskbox">
        <div className="row">
            <div className="col-10">
                {/* <form onSubmit={this.addTodo} id="add-task"> */}
                <form  onSubmit={this.props.addToDo} id="add-task">
                    {/* <input Onchange={this.props.handleinputchange} value= {this.props.NewINput} type="text" placeholder="Add a new task here..." id="textbox"></input> */}
                    <input  type="text" placeholder="Add a new task here..." id="textbox"></input>
                </form>
            </div>
            <div onClick={this.props.addToDo} className="col-2" id="submit">
                Submit
            </div>
        </div>
        <div className='row' id="sortingbuttons">
            <div className='col-1' >
                Sort:
            </div>
            <div className='col-3' onClick={this.props.alphasort} >
                Alphabetical
            </div>
            <div className='col-3' onClick={this.props.datesort} >
                Created Date
            </div>
            <div className='col-3' onClick={this.props.completesort}>
                Completed
            </div>
        </div>
    </div>
    );
  }
}

export default NewTodo;