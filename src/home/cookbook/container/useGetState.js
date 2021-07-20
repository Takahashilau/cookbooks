import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import actionCreater from '../actionCreater';


const useGetState = () => {
  // react-redux hooks
  const cookbook = useSelector(state => state.get('cookbook'))
  const dispatch = useDispatch()

  // react hooks
  useEffect(() => {
    dispatch(actionCreater.loadDataAsync())
  }, [dispatch])
  
  return cookbook
}

export default useGetState