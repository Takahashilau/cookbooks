import React, { useCallback, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
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

const List = () => {
  const cookbook = useSelector(state => state.get('cookbook'))
  const list = cookbook.get('list')
  const dispatch = useDispatch()

  const history = useHistory()
  const location = useLocation()

  const handleGotoDetail = useCallback(
    (title) => {
      return () => {
        history.push('/detail', { 
          listTitle: location.state.title,
          title, 
          from: '/list' })
      }
    },[history, location.state.title])

  const handleLeftClick = useCallback(
    () => {
        history.push('/home', {from: '/list'})
    },
    [history])

  useEffect(() => {
    if (list.size === 0) {
      dispatch(actionCreater.loadDataAsync())
    }
  }, [dispatch, list.size])

  return (
    <ListContainer>
      <NavBar
        icon={<Icon type="left"/>}
        onLeftClick={handleLeftClick}
        style={{backgroundColor: '#ee742f'}}
      >{location.state && location.state.title}</NavBar>
      <ul>
        {
          list.map((li, i) => (
            <ListWrap
              width="0 0 1px 0"
              key={li.id + i}
              onClick={handleGotoDetail(li.name)}
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

export default animate(List)