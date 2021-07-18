import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreater as ac } from '@/home/category'

import { MenuList } from '@c/MenuList/MenuList'
import { get } from '@u/http'

@withRouter
@connect(
  state => ({
    cateType: state.category.routeInfo.cateType,
    cateAside: state.category.routeInfo.cateAside
  }),
  dispatch => ({
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Menu extends Component {
  state = {
    cate: null,
  }

  async componentDidMount() {
    let result = await get({
      url: "/api/category"
    })

    this.setState({
      cate: result.data.data
    })

    if(this.props.cateAside.length === 0) {
      this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类')
    }
  }

  handleAsideClick = (curCate) => {
    return () => {
      this.props.changeCateAside(curCate)
    }
  }

  handleGotoList = (title) => {
    return () => {
      this.props.history.push('/list', {title})
    }
  }

  render() {
    return (
      <MenuList
        onAsideClick={this.handleAsideClick}
        curCate={this.props.cateAside}
        cate={this.state.cate && this.state.cate[this.props.cateType]}
        onGotoList={this.handleGotoList}
      ></MenuList>
    )
  }
}

export default Menu