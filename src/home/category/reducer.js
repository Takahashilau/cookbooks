import { fromJS } from 'immutable'

const defaultState = fromJS({
  routeInfo: {
    selectedTab: 'cookbook',
    cateType: 'category',
    cateAside: ''
  }
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'changeSelectedTab':
      return state.setIn(['routeInfo', 'selectedTab'], action.selectedTab)
    case 'changeCateType':
      return state.setIn(['routeInfo', 'cateType'], action.cateType)
    case 'changeCateAside':
      return state.setIn(['routeInfo', 'cateAside'], action.cateAside)
    default:
      return state
  }
}

export default reducer