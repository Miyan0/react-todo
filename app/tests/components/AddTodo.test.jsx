import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid data', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let todoText = 'Check mail';
    let $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo if invalid data', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let todoText = '';
    let $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
