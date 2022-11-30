import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };
  // newInput = {}
    // this.addToDo = this.addToDo.bind(this);
    // this.testing = this.testing.bind(this);
  // this.handleinputchagne = this.handleinputchange.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  componentDidMount() {
    // Make API call to fetch existing Todos. 
  //   fetch("https://cse204.work/todos")
  //     .then(function (response) {
  //       this.setState({todos: JSON.parse(response)});
  //     }
  //  )

    var xhttp = new XMLHttpRequest();
    var self = this;
    // var todoarray = this.state.todos;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) { 
          self.setState({
            todos: [...self.state.todos, JSON.parse(this.responseText)]
          })
          // console.log(self.state.todos);
          // var todotesting = JSON.parse(this.responseText);
          // testing(todotesting)
          
          // this.state.todos = self.state.todos;
          // self.setState({input: ''});
        }
        // console.log(self.state.todos, "test")
        // todoarray = self.state.todos;
        // console.log(todoarray, "3")
        
    };
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
    xhttp.send();
    // console.log(todoarray, "yes");
    // this.state.todos = todoarray;
    // function testing(array) {
    //   console.log(array, "yes")
    //   // // console.log(this.state.todos, "without");
    //   console.log(this.state.todos)
    //   // console.log(this.state.todos, "with");
    // }
    // console.log(this.state.todos, "test1")
  }


  addToDo(event) {
    // need to get values from input form
    // var textbox = document.getElementById("textbox")
    // this is the ajax call
    event.preventDefault();

    var textbox = document.getElementById("textbox");
    
    var data = {
      text : textbox.value
  }
  var self = this;
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          // var todo = JSON.parse(this.responseText);
          // console.log(todo);
          self.setState({
            todos: [...self.state.todos, JSON.parse(this.responseText)]
          })
          // console.log(self.state.todos, "sure")
          // // clear the input field
          // self.setState({input: ''});
      } else if (this.readyState === 4) {
          console.log(this.responseText);
      }
  };

  xhttp2.open("POST", "https://cse204.work/todos", true);
  xhttp2.setRequestHeader("Content-type", "application/json");
  xhttp2.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
  xhttp2.send(JSON.stringify(data));
  }

// will add this function later
//   deleteToDos(ids) {
//     var id = ids;

//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // var todos = JSON.parse(this.responseText);
//         // console.log(todos);
//         }
//     };

//     xhttp.open("DELETE", "https://cse204.work/todos/"+id, true);
//     xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
//     xhttp.send();


// }



// handleinputchange(event){
//   alert(event.target.value);
//   this.setState({
//     newInput: event.target.value
//   })
// }

// handleAddbutton(event){
//   event.precetnDefault();
//   //ajax call 
//   ajaxobject = new XMLHttpRequest
//   let self = this;
//   ajaxobject.onreadystatechange = () => {
//     self.state.newInput;
//     this.readystate ; 
//   }
// }

// handleDelete(todoID){

// }


  render() {
    return (
     <section>
        <div className="container-fluid" id="header">
          <div className="row">
            <div className="col">
              <h1>Your To Do List</h1>
            </div>
          </div>
        </div>
        <div id='main-page'>
          {/* <NewTodo addTodo={this.addTodo}/> */}
          {/* <NewTodo newInput={this.state.newInput} handleinputchange={this.handleinputchange}/> */}
          <NewTodo addToDo={this.addToDo} />
  
          {/* {this.state.todos.map((todo) =>
         <Todo key={todo.id}
           text={todo.text} />
       )} */}

       {/* {this.state.todos.map((todo) =>
       console.log(todo.id, "ok")
       )}
       
       {console.log(this.state.todos[0])}
       {console.log(typeof this.state.todos)}
       {console.log(this.state.todos.length, "length")} */}
       {this.state.todos.map((todo) =>
       console.log(todo.id, "id")
      
       )}
       {console.log(this.state.todos[0])}
          <Todo />

        </div>
      </section> 
      
  );
  }
}

export default App;
