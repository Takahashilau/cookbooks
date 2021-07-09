import React, { Component } from 'react';
import CookBookUI from '../ui/CookBookUI';
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreater';

@connect(
  state => {
    return {
      list: state.cookbook.list
    }
  },
  dispatch => ({
    loadData() {
      dispatch(loadDataAsync())
    }
    // return {
    //   loadData: () => dispatch(loadDataAsync())
    // }
    //  与上面的写法区别在，外层不需要套括号。
  })
)
class CookBook extends Component {
  render() {
    return (
      <CookBookUI
        list={this.props.list}
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