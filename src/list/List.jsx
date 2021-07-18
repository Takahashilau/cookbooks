import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actionCreater} from '../home/cookbook'
import animate from '../hoc/animate'

import { 
  NavBar,
  Icon
} from 'antd-mobile'

import { 
  ListWrap,
  SubTitle,
  ListContainer
} from './StyledList'

@animate
@connect(
  state => ({
    list: state.cookbook.list
  }),
  dispatch => ({
    loadData() {
      dispatch(actionCreater.loadDataAsync())
    }
  })
)
class List extends Component {
  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', { 
        listTitle: this.props.location.state.title,
        title, 
        from: '/list' })
    }
  }

  handleLeftClick = () => {
    let { history } = this.props
      history.push('/home', {from: '/list'})
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }

  render() {
    return (
      <ListContainer>
        <NavBar
          icon={<Icon type="left"/>}
          onLeftClick={this.handleLeftClick}
          style={{backgroundColor: '#ee742f'}}
        >{this.props.location.state && this.props.location.state.title}</NavBar>
        <ul>
          {
            this.props.list.map((li, i) => (
              <ListWrap
                width="0 0 1px 0"
                key={li.id + i}
                onClick={this.handleGotoDetail(li.name)}
              >
                <div>
                  <img src={li.img} width="115" height="75" alt=""/>
                </div>
                <div>
                  <h1>{li.name}</h1>
                  <SubTitle
                    line={1}
                  >{li.burdens}</SubTitle>
                  <h3>{li.all_click}浏览 {li.favorites}收藏</h3>
                </div>
              </ListWrap>
            ))
          }
        </ul>
      </ListContainer>
    )
  }
}

export default List