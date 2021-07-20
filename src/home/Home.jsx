import React, { useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreater as ac } from './category'
import animate from '../hoc/animate'

import {
	TabBar
} from 'antd-mobile'

import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'

import menu from '@a/images/menu.png'
import menuActive from '@a/images/menu-active.png'

import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'

import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import CookBook from './cookbook/container/CookBook'
import { Category } from './category'
import Map from './map/Map'
import { More } from './more'

const Home = () => {
  const category = useSelector(state => state.get('category'))
  const home = useSelector(state => state.get('home'))
  const checked = home.get('checked')
  const dispatch = useDispatch()
  
  const [Tabs, setTabs] = useState({
    selectedTab: category.getIn(['routeInfo', 'selectedTab']),
    hidden: false,
		fullScreen: true,
  })


  const tabItems = [
    <TabBar.Item
    title="美食大全"
    key="cookbook"
    icon={<div style={{
      width: '22px',
      height: '22px',
      background: `url(${cookbook}) center center /  21px 21px no-repeat` }}
    />
    }
    selectedIcon={<div style={{
      width: '22px',
      height: '22px',
      background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
    />
    }
    selected={Tabs.selectedTab === 'cookbook'}
    onPress={() => {
      setTabs({
        selectedTab: 'cookbook',
      });
      dispatch(ac.changeSelectedTab('cookbook'))
    }}
    >
      <CookBook></CookBook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={Tabs.selectedTab === 'category'}
      onPress={() => {
        setTabs({
          selectedTab: 'category',
        })
        dispatch(ac.changeSelectedTab('category'))
      }}
    >
      <Category></Category>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="美食地图"
      key="map"
      selected={Tabs.selectedTab === 'map'}
      onPress={() => {
        setTabs({
          selectedTab: 'map',
        });
      }}
    >
      <Map></Map>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={Tabs.selectedTab === 'more'}
      onPress={() => {
        setTabs({
          selectedTab: 'more',
        });
      }}
    >
      <More></More>
    </TabBar.Item>
  ]

  return (
    <div style={{ position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={Tabs.hidden}
      >
        {
          checked
            ? tabItems.map(v => v)
            : tabItems.filter((v, i) => i !== 2)
        }
      </TabBar>
    </div>
  )
}

export default animate(Home)