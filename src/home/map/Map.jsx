import React from 'react'
import { NavBar } from 'antd-mobile'

export default function Map() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <NavBar 
        style={{backgroundColor: '#ee742f'}}
      >美食地图</NavBar>
      <iframe 
        style={{width: '100%', height: '100%'}}
        title="iframe"
        src="/map.html" 
        frameBorder="0"
      ></iframe>
    </div>
  )
}
