import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import Immutable from 'immutable'

const initialState = Immutable.Map()

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk))

export default store;