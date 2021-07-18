import React from 'react'
import { MenuWrap } from './StyledMenuList'
import PropsTypes from 'prop-types'

export const MenuList = (props) => {
  const {cate, curCate} = props
  return (
    <MenuWrap
      width="1px 0 0 0"
    >
      <aside>
        <ul>
          {
            cate && Object.keys(cate).map(value => {
              return (
                <li 
                  className={curCate === value ? "active" : ""}
                  key={value}
                  onClick={props.onAsideClick(value)}
                >
                  <span>{value}</span>
                </li>
              )
            })
          }
        </ul>
      </aside>
      <section>
        <ul>
          {
            cate && curCate && cate[curCate].map(value => {
              return (
                <li 
                  key={value}
                  onClick={props.onGotoList(value)}
                >{value}</li>
              )
            })
          }
        </ul>
      </section>
    </MenuWrap>
  )
}

MenuList.propTypes = {
  cate: PropsTypes.object,
  curCate: PropsTypes.string
}
