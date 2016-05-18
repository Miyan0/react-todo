import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import { configure } from 'configureStore'

import TodoApp from 'TodoApp'
import TodoList from 'TodoList'


describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should render TodoList', () => {
    let store = configure()
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    )

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })
});
