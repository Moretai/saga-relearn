import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import * as actions from 'actions/test'

const initialState = Immutable.fromJS({
  data: "INIT",
  loading: false,
  loaded: false,
  error: null
})

export default handleActions({
  [actions.testRequest] (state, action) {
    return state.set('data', 'requesting......')
  },
  [actions.testSucceed] (state, action) {
    return state.set('data', Immutable.fromJS(action.payload))
  },
  [actions.testRequest] (state, action) {
    return state.set('data', 'Requesting Failed...')
  }
}, initialState)
