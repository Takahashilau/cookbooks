import React from 'react';
import useGetState from './useGetState';
import useGotoDetail from './useGotoDetail';

import CookBookUI from '../ui/CookBookUI';


const CookBook = () => {
  const cookbook = useGetState()
  const handleGotoDetail = useGotoDetail()


  return (
    <CookBookUI
      list={cookbook.get('list')}
      onGotoDetail={handleGotoDetail}
    ></CookBookUI>
  )
}

export default CookBook