import { combineReducers } from 'redux'
import { reducer as cookbook } from '../home/cookbook'

const reducer = combineReducers({
  cookbook
})

export default reducer