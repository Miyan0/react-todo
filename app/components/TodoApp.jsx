import React, { Component } from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

export default class TodoApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          todos: [
              {
                  id: 1,
                  text: 'Walk the dog'
              }, {
                  id: 2,
                  text: 'Clean the yard'
              }, {
                  id: 3,
                  text: 'Go to the market'
              }, {
                  id: 4,
                  text: 'Mon ptit panier sous mon bras'
              }
          ]
      }
  }
  handleAddTodo(text) {
    alert('New Todo: ' + text);
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}
