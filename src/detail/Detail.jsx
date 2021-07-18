import React, { Component } from 'react'
import animate from '../hoc/animate'

import { 
  NavBar,
  Icon
} from 'antd-mobile'

import { DetailWrap } from './StyledDetail'

@animate
class Detail extends Component {
  handleLeftClick = () => {
    let { history } = this.props
    let { from, listTitle } = this.props.location.state
    history.push(from, {from: '/detail', title: listTitle})
  }
  
  render() {
    let state = this.props.location.state
    return (
      <DetailWrap>
        <NavBar
          icon={<Icon type="left"/>}
          onLeftClick={this.handleLeftClick}
          style={{backgroundColor: '#ee742f'}}
        >{state && state.title}</NavBar>
        <div>
          <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1311/561c79f4d4e14.jpg/OTAweDYwMA" alt="" />
        </div>
        <div className="detail">
          <h1>{state && state.title}</h1>
          <h3>2222浏览 233收藏</h3>
          <button>收藏</button>
        </div>
      </DetailWrap>
    )
  }
}

export default Detail