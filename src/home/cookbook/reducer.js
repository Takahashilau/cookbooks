import { fromJS, List } from 'immutable'
import { LOADDATA } from "./actionType"

const defaultState = fromJS({
  list: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return state.set('list', List(action.list))
    default:
      return state
  }
}

export default reducer;