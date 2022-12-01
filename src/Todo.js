import React, { Component } from 'react';
import './Todo.css';
// importing images
import unchecked from './unchecked.png';
import remove from './remove.png';
import checked from './checked.png';

class Todo extends Component {


    constructor(props) {
      super(props);
      // binding this to functions
      this.handleDelete1 = this.handleDelete1.bind(this);
      this.uncheck1 = this.uncheck1.bind(this);
      this.check1 = this.check1.bind(this);
    }
  
  handleDelete1(){
    // calling delete function with id
    {this.props.deleteToDo(this.props.id)}

  }

  uncheck1(){
    // calling uncheck function with id
    {this.props.uncheck(this.props.id)}
  }

  check1(){
    // calling check function with id
    {this.props.checkfun(this.props.id)}
  }
  

  render() {
    // checking if completed for checked image
    var complete_state = this.props.completed;

    // if completed, this will change what is shown below such as strikethrough, checked image and function to be called
    if (complete_state == true) {
      var check = checked;
      var line = "line-through"
      var check_complete = this.uncheck1;
    }
    else{
      check = unchecked;
      line = "none"
      check_complete = this.check1;
    }

    return (
                <div className="container" style={{marginTop: "2%"}} >

                  <div className="row" >

                    <div className="col" >
                      <img src={check} className="unchecked-box" onClick = {check_complete} />
                    </div>

                    <div className="col-6" id={this.props.id} style={{ textDecoration: line }} >
                      {this.props.text}
                    </div>

                    <div className="col" >
                      <img src={remove} className="delete-button" onClick = {this.handleDelete1}/>
                    </div>

                  </div>

                </div>

    );
  }
}

export default Todo;