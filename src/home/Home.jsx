import React, { Component } from 'react'
import { connect } from 'react-redux'
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

@animate
@connect(
  state => ({
    checked: state.home.checked,
    selectedTab: state.category.routeInfo.selectedTab
  }),
  dispatch => ({
    changeSelectedTab(selectedTab) {
      dispatch(ac.changeSelectedTab(selectedTab))
    }
  })
)
class Home extends Component {
	state = {
		selectedTab: this.props.selectedTab,
		hidden: false,
		fullScreen: true,
	};



  render() {
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
      selected={this.state.selectedTab === 'cookbook'}
      onPress={() => {
        this.setState({
          selectedTab: 'cookbook',
        });
        this.props.changeSelectedTab('cookbook')
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
        selected={this.state.selectedTab === 'category'}
        onPress={() => {
          this.setState({
            selectedTab: 'category',
          })
          this.props.changeSelectedTab('category')
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
        selected={this.state.selectedTab === 'map'}
        onPress={() => {
          this.setState({
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
        selected={this.state.selectedTab === 'more'}
        onPress={() => {
          this.setState({
            selectedTab: 'more',
          });
        }}
      >
      <More></More>
      </TabBar.Item>
    ]

    return (
      <div style={this.state.fullScreen ? { position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            this.props.checked
              ? tabItems.map(v => v)
              : tabItems.filter((v, i) => i !== 2)
          }
        </TabBar>
      </div>
    )
  }
}

export default Home