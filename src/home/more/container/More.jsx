import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
  Switch,
  NavBar
} from 'antd-mobile'
import { 
  MoreWrap,
  TitleBar
} from './StyledMore'

import { actionCreator } from '@/home/'

const More = () => {
  const home = useSelector(state => state.get('home'))
  const checked = home.get('checked')
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (checked) => {
      dispatch(actionCreator.changeSwitch(checked))
      // 本地存储：将checked存起来
      localStorage.setItem('checked', checked)
    },
    [dispatch],
  )

  return (
    <TitleBar>
      <NavBar>更多</NavBar>
      <MoreWrap>
        <span>显示地图</span>
        <Switch
          checked={checked}
          onChange={handleChange}
        ></Switch>
      </MoreWrap>
    </TitleBar>
  )
}

export default More