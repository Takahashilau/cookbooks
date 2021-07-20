const changeSelectedTab = (selectedTab) => {
  console.log(selectedTab)
  return {
    type: 'changeSelectedTab',
    selectedTab
  }
}

const changeCateType = (cateType) => {
  return {
    type: 'changeCateType',
    cateType
  }
}

const changeCateAside = (cateAside) => {
  return {
    type: 'changeCateAside',
    cateAside
  }
}

const actionCreater = {
  changeSelectedTab,
  changeCateType,
  changeCateAside
}

export default actionCreater