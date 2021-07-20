import { combineReducers } from 'redux-immutable'
import { reducer as cookbook } from '../home/cookbook'
import { reducer as home } from '../home'
import { reducer as category } from '../home/category'

const reducer = combineReducers({
  cookbook,
  home,
  category
})

export default reducer