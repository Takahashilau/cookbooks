import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import CookBookUI from '../ui/CookBookUI';
import actionCreater from '../actionCreater';

@withRouter
@connect(
  state => {
    return {
      list: state.cookbook.list
    }
  },
  dispatch => ({
    loadData() {
      dispatch(actionCreater.loadDataAsync())
    }
    // return {
    //   loadData: () => dispatch(actionCreater.loadDataAsync())
    // }
    //  与上面的写法区别在，外层不需要套括号。
  })
)
class CookBook extends Component {
  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', { title, from: '/home' })
    }
  }

  render() {
    return (
      <CookBookUI
        list={this.props.list}
        onGotoDetail={this.handleGotoDetail}
      ></CookBookUI>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }

  componentDidUpdate() {
    // console.log(this.props.list)
  }
}

export default CookBook