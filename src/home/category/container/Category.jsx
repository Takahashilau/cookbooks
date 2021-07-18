import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreater as ac } from '@/home/category';

import CategoryUI from '../ui/CategoryUI';

@connect(
  state => ({
    cateType: state.category.routeInfo.cateType,
    cateAside: state.category.routeInfo.cateAside
  }),
  dispatch => ({
    changeCateType(type) {
      dispatch(ac.changeCateType(type))
    },
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Category extends Component {
  handleClick = (type) => {
    return () => {
      this.props.changeCateType(type)
      this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
    }
  }

  render() {
    return (
      <CategoryUI
        type={this.props.cateType}
        onCategoryUIClick={this.handleClick}
      ></CategoryUI>
    );
  }
}

export default Category;