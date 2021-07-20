import React from 'react'
import PropTypes from 'prop-types'

import { MenuList } from '@c/MenuList/MenuList'

import useCateChange from './useCateChange'
import useGotoList from './useGotoList'

const Menu = () => {
  const { Cate, cateAside, cateType, handleAsideClick } = useCateChange()
  const { handleGotoList } = useGotoList()
  
  return (
    <MenuList
      onAsideClick={handleAsideClick}
      curCate={cateAside}
      cate={Cate && Cate[cateType]}
      onGotoList={handleGotoList}
    ></MenuList>
  )
}

Menu.propTypes = {
  type: PropTypes.string
}

export default Menu