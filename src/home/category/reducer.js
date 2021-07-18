const defaultState = {
  routeInfo: {
    selectedTab: 'cookbook',
    cateType: 'category',
    cateAside: ''
  }
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'changeSelectedTab':
      return {
        routeInfo:{
          ...state.routeInfo,
          selectedTab: action.selectedTab
        }
      }
    case 'changeCateType':
      return {
        routeInfo:{
          ...state.routeInfo,
          cateType: action.cateType
        }
      }
    case 'changeCateAside':
      return {
        routeInfo:{
          ...state.routeInfo,
          cateAside: action.cateAside
        }
      }
    default:
      return state
  }
}

export default reducer