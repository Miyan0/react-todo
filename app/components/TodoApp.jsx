import React, {Component} from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showCompleted: false,
          searchText: '',
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
