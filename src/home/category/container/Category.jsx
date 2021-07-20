import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actionCreater as ac } from '@/home/category';

import CategoryUI from '../ui/CategoryUI';

const Category = () => {
  const category = useSelector(state => state.get('category'))
  const cateType = category.getIn(['routeInfo', 'cateType'])

  const dispatch = useDispatch()

  const handleClick = useCallback(
    (type) => {
      return () => {
        dispatch(ac.changeCateType(type))
        dispatch(ac.changeCateAside(type === 'category' ? '热门' : '肉类'))
      }
    } ,
    [dispatch],
  )

  return (
    <CategoryUI
      type={cateType}
      onCategoryUIClick={handleClick}
    ></CategoryUI>
  );
}

export default Category;