import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreater as ac } from '@/home/category'
import { get } from '@u/http'


const useCateChange = () => {
  const [Cate, setCate] = useState(null)
  const category = useSelector(state => state.get('category'))
  const cateType = category.getIn(['routeInfo', 'cateType'])
  const cateAside = category.getIn(['routeInfo', 'cateAside'])
  const dispatch = useDispatch()

  const handleAsideClick = useCallback((curCate) => {
      return () => {
        dispatch(ac.changeCateAside(curCate))
      }
    },
    [dispatch],
  )
  
  useEffect(() => {
    (async () => {
      let result = await get({
        url: "/api/category"
      })

      setCate(result.data.data)

      if(cateAside.length === 0) {
        dispatch(ac.changeCateAside(cateType === 'category' ? '热门' : '肉类'))
      }
    })()
  }, [cateAside.length, cateType, dispatch])

  return { Cate, cateAside, cateType, handleAsideClick}
}

export default useCateChange