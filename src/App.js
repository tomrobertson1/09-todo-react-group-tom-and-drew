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
    // binding this to functions
    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.uncheck = this.uncheck.bind(this);
    this.checkfun = this.checkfun.bind(this);
    this.alphasort = this.alphasort.bind(this);
    this.completesort = this.completesort.bind(this);
    this.datesort = this.datesort.bind(this);
  }

  componentDidMount() {
    // getting api task and assigning to todo array
    var xhttp = new XMLHttpRequest();
    var self = this;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) { 
          self.setState({
            todos: JSON.parse(this.responseText)
          })
        }        
    };
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
    xhttp.send();
    console.log(this.state.todos, "this")
  }


  

  addToDo(event) {
    // prevent page reload
    event.preventDefault();

    var textbox = document.getElementById("textbox");
    if (textbox.value==''){
      // making sure task in inputed 
      alert("Please add a new task!");
    }
    else {
      // making sure task is unique
      var textwords = document.getElementsByClassName("col-6");
      let array = Array.from(textwords); 
      var same = 0;
      for (var i = 0; i < array.length ; i++){
          if (textbox.value==array[i].innerHTML){
              same =1;
          }
      }
      if (same==1){
          alert("Please add a unique task")
      }
      else{
        // if task is unique, add task to api and todo array
        var data = {
          text : textbox.value
      }
      var self = this;
      var xhttp2 = new XMLHttpRequest();
      xhttp2.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
              self.setState({
                todos: [...self.state.todos, JSON.parse(this.responseText)]
              })
          } else if (this.readyState === 4) {
              console.log(this.responseText);
          }
      };
      xhttp2.open("POST", "https://cse204.work/todos", true);
      xhttp2.setRequestHeader("Content-type", "application/json");
      xhttp2.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
      xhttp2.send(JSON.stringify(data));
      }

    }
    textbox.value = ''; // clears out text box
  }



        deleteToDo(ids) {
          // deleting from api
          let id = ids;
          let self=this;
          let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              }
          };

          xhttp.open("DELETE", "https://cse204.work/todos/"+id, true);
          xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
          xhttp.send();


          // adding todos not selected to array, assign array to todo array
          var todolist = [];
          this.state.todos.filter((todo) => {
            // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
            if (todo.id !== id) {
              todolist.push(todo)
            }
          });

          this.setState({
                todos: todolist
              })

        }



      uncheck(ids){
          var id = ids;
          var item = document.getElementById(id);
          item.style.textDecoration = "none";

          // changing completed status of todo
          var data =  {
              completed: false
          }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          }
        };

        xhttp.open("PUT", "https://cse204.work/todos/"+id, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
        xhttp.send(JSON.stringify(data));

        // change status on todo array
        this.state.todos.filter((todo) => {
          if (todo.id == id) {
            todo.completed = false;
          }
        });
        // re - render
        this.setState({ state: this.state });
   }


          checkfun(ids){
            var id = ids;
            var item = document.getElementById(id);
            item.style.textDecoration = "line-through";

            // changing status of api
            var data =  {
                completed: true
            }

          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            }
          };

          xhttp.open("PUT", "https://cse204.work/todos/"+id, true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
          xhttp.send(JSON.stringify(data));


       this.state.todos.filter((todo) => {
        if (todo.id == id) {
          todo.completed = true;
        }
      });

      this.setState({ state: this.state });
    }


        alphasort(){
          // sorting by comparison of text
          // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
          this.state.todos.sort((a,b) =>{
            if (a.text > b.text){
              return 1
            }
            else{
              return -1
            }
          })
          // re-render
          this.setState({ state: this.state });
        }


        completesort(){
          // this should empty array, put uncomplete first, then completed
          var completearray = [];

          {this.state.todos.map((todo) =>
            {if (todo.completed == false){
              completearray.push(todo)
            }}
          )}

          {this.state.todos.map((todo) =>
            {if (todo.completed == true){
              completearray.push(todo)
            }}
          )}

          this.setState({
            todos: completearray
          })
        }

        datesort(){
          this.state.todos.sort((a,b) =>{
            if (a.created_at > b.created_at){
              return 1
            }
            else{
              return -1
            }
          })

          this.setState({ state: this.state });
        }



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

        {/* Calling new todos and passing in functions */}
          <NewTodo addToDo={this.addToDo} alphasort={this.alphasort} completesort={this.completesort} datesort={this.datesort}/>


        {/* creating todos by going through eahc task */}
          {this.state.todos.map((todo) =>
         <Todo id={todo.id} completed={todo.completed}
           text={todo.text} deleteToDo = {this.deleteToDo} uncheck={this.uncheck} checkfun={this.checkfun} />
       )}
        </div>
      </section> 
      
  );
  }
}

export default App;
