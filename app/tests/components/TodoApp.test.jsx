import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    // challenge expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', () => {
    let todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

    // challenge expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to incompleted', () => {
    let todoData = {
      id: 12,
      text: 'Test features',
      completed: true,
      createdAt: 1463335285,
      completedAt: 14321321
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    // challenge expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
