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
    this.deleteToDo = this.deleteToDo.bind(this);
    this.uncheck = this.uncheck.bind(this);
    this.checkfun = this.checkfun.bind(this);
    this.alphasort = this.alphasort.bind(this);
    this.completesort = this.completesort.bind(this);
    this.datesort = this.datesort.bind(this);
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
            todos: JSON.parse(this.responseText)
          })
          console.log(self.state.todos, "self")
          // console.log(self.state.todos);

        }        
    };
    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
    xhttp.send();
    console.log(this.state.todos, "this")
   
  }


  

  addToDo(event) {
    // need to get values from input form
    // var textbox = document.getElementById("textbox")
    // this is the ajax call
    event.preventDefault();

    var textbox = document.getElementById("textbox");

    if (textbox.value==''){
      // could add a pop up here to add a value
      alert("Please add a new task!");
  }
  else {
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

  }
  textbox.value = ''; // clears out text box
  }



        deleteToDo(ids) {
          console.log('pass')
          let id = ids;
          let self=this;
          let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                //var todos = JSON.parse(this.responseText);
              //console.log(todos);
              }
          };

          xhttp.open("DELETE", "https://cse204.work/todos/"+id, true);
          xhttp.setRequestHeader("x-api-key","54b827-b0e225-c6b963-9c08fd-dc654c");
          xhttp.send();



          var todolist = [];
          this.state.todos.filter((todo) => {
            // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
            if (todo.id !== id) {
              todolist.push(todo)
            }
          });

          // reset todos array
          this.setState({
                todos: todolist
              })

        }



      uncheck(ids){
        console.log("unchecking")
          var id = ids;
          var item = document.getElementById(id);
          item.style.textDecoration = "none";
          var data =  {
              completed: false
          }

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // var todos = JSON.parse(this.responseText);

          }
        };

        xhttp.open("PUT", "https://cse204.work/todos/"+id, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
        xhttp.send(JSON.stringify(data));

        this.state.todos.filter((todo) => {
          // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
          if (todo.id == id) {
            todo.completed = false;
          }
        });
        this.setState({ state: this.state });
        // still neeed to uncheck within todos array
   }


          checkfun(ids){
            console.log("checking")
            var id = ids;
            var item = document.getElementById(id);
            item.style.textDecoration = "line-through";
            var data =  {
                completed: true
            }

          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // var todos = JSON.parse(this.responseText);

            }
          };

          xhttp.open("PUT", "https://cse204.work/todos/"+id, true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.setRequestHeader("x-api-key", "54b827-b0e225-c6b963-9c08fd-dc654c");
          xhttp.send(JSON.stringify(data));


       this.state.todos.filter((todo) => {
        // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
        if (todo.id == id) {
          todo.completed = true;
        }
      });
      this.setState({ state: this.state });
          // still neeed to uncheck within todos array
        }


        alphasort(){
          // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
          this.state.todos.sort((a,b) =>{
            if (a.text > b.text){
              return 1
            }
            else{
              return -1
            }
          })
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
            console.log(completearray, "completed")
          {this.state.todos.map((todo) =>
            {if (todo.completed == true){
              completearray.push(todo)
            }}
          )}
          console.log(completearray, "finalcomplete");
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


          <NewTodo addToDo={this.addToDo} alphasort={this.alphasort} completesort={this.completesort} datesort={this.datesort}/>
          {/* <NewTodo /> */}



          {this.state.todos.map((todo) =>
         <Todo id={todo.id} completed={todo.completed}
           text={todo.text} deleteToDo = {this.deleteToDo} uncheck={this.uncheck} checkfun={this.checkfun} />
       )}
       {/* {this.state.todos.map((todo) =>
        console.log(todo, "final")
      )} */}

      
       {/* {this.state.todos.map((todo) =>
         console.log(todo, "printing at end")
       )}
       {this.state.todos.map((todo) =>
         console.log(todo.id, "ids")
         
       )} */}




       {/* {console.log(Object.keys(this.state.todos).length)} */}
       {/* {this.state.todos.map((todo) =>
         <Todo key={todo.id}
           text={todo.text} />
       )} */}


          {/* <Todo key="3456" text="Profit" deleteToDo = {this.deleteToDo} uncheck={this.uncheck} checkfun={this.checkfun} completed = "false"/> */}


          {/* {this.state.todos.map(({id}) =>{
         console.log(id)}
       )} */}





        </div>
      </section> 
      
  );
  }
}

export default App;
