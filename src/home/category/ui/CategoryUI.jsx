import React from 'react'
import { 
  CategoryWrap,
  NavUL
} from './StyledCategory';
import Search from '@c/search/Search'
import Menu from './Menu'

export default function CategoryUI(props) {
  let { type, onCategoryUIClick } = props

  return (
    <CategoryWrap>
        <nav>
          <NavUL
            radius={.15}
            color="#fff"
          >
            <li
            className={type === 'category' ? "active" : ""}
            onClick={onCategoryUIClick('category')}>分类</li>
            <li
            className={type === 'material' ? "active" : ""}
            onClick={onCategoryUIClick('material')}>食材</li>
            <li className={type === 'category' ? "slide" : "slide right"}></li>
          </NavUL>
        </nav>
        <Search
          outerbg="#fff"
          innerbg="#efefef"
          hasborder={false}

          radius={.06}
        ></Search>
        <Menu
          type={type}
        ></Menu>
      </CategoryWrap>
  )
}
