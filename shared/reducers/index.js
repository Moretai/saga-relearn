import { combineReducers } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form/es/immutable'
import test from './test'
import intl from './intl'

export default combineReducers({
  form,
  routing,
  reduxAsyncConnect,
  test,
  intl
})
