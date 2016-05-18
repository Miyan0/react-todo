import expect from 'expect'
import * as reducers from 'reducers'
import df from 'deep-freeze-strict'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }

      const res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', () => {
    it('should flipped the show completed flag', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const state = false;
      const res = reducers.showCompletedReducer(df(state), df(action))
      expect(res).toEqual(!state)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }

      const res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text)
    })

    it('should toggle todo', () => {
      const todo = {
        id: 123,
        text: 'dog',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }
      const action = {
        type: 'TOGGLE_TODO',
        id: 123
      }

      const res = reducers.todosReducer(df([todo]), df(action))
      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAt).toEqual(undefined)
    })

    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]

      let action = {
        type: 'ADD_TODOS',
        todos
      }
      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })
  })

})
