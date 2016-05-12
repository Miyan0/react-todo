import React, {Component} from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showCompleted: false,
          searchText: '',
          todos: [
              {
                  id: uuid(),
                  text: 'Walk the dog'
              }, {
                  id: uuid(),
                  text: 'Clean the yard'
              }, {
                  id: uuid(),
                  text: 'Go to the market'
              }, {
                  id: uuid(),
                  text: 'Mon ptit panier sous mon bras'
              }
          ]
      }
  }

  handleAddTodo(text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text
          }
        ]
      });
  }

  handleSearch(showCompleted, searchText) {
      this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
  }

  render() {
      let {todos} = this.state;
      return (
          <div>
            <TodoSearch onSearch={this.handleSearch.bind(this)}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
          </div>
      );
  }
}
