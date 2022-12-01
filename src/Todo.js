import React, { Component } from 'react';
import './Todo.css';
// import unchecked from './unchecked.png';
import unchecked from './unchecked.png';
import remove from './remove.png';
import checked from './checked.png';

class Todo extends Component {


    constructor(props) {
      super(props);
      this.handleDelete1 = this.handleDelete1.bind(this);
      this.uncheck1 = this.uncheck1.bind(this);
      this.check1 = this.check1.bind(this);
    }
  
  handleDelete1(){
    // console.log('test')
    // console.log(this.props.id)
    {this.props.deleteToDo(this.props.key)}

  }

  uncheck1(){
    console.log("uncheck1")
    {this.props.uncheck(this.props.key)}
  }

  check1(){
    console.log("check1")
    {this.props.checkfun(this.props.key)}
  }
  

  render() {
    // checking if completed for checked image
    var complete_state = this.props.completed;
    if (complete_state == "true") {
      var check = checked;
      // another variable for check function
      var check_complete = this.uncheck1;
    }
    else{
      check = unchecked;
      check_complete = this.check1;
    }

    return (
                <div className="container" >

                  <div className="row"  >

                    <div className="col" >
                      <img src={check} className="unchecked-box" onClick = {check_complete} />
                      {/* <img src={check} className="unchecked-box"/> */}

                    </div>

                    <div className="col-6"  >
                      {this.props.text}
                    </div>

                    <div className="col" >
                      <img src={remove} className="unchecked-box" onClick = {this.handleDelete1}/>
                      {/* <img src={remove} className="unchecked-box"/> */}

                    </div>

                  </div>

                </div>

    );
  }
}

export default Todo;