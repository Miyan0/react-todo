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

})
