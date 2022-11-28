import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
     <section>
        <div class="container-fluid" id="header">
          <div class="row">
            <div class="col">
              <h1>Your To Do List</h1>
            </div>
          </div>
        </div>
        <div id='main-page'>
          <Todo />
        </div>
      </section> 
  );
  }
}

export default App;
