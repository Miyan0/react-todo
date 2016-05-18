import React, { Component } from 'react'
import Todo from 'Todo'
import { connect } from 'react-redux'

// We need to also export the class for testing.
export class TodoList extends Component {

  render() {
    let {todos} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList);
