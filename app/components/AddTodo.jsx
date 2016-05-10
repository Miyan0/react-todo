import React, { Component } from 'react'

export default class AddTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="todoText" type="text" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}
