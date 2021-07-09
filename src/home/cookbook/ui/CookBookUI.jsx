import React from 'react';
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import { Container } from './StyledCookBook';
import Swiper from './Swiper';
import Search from '@c/search/Search';
import HotCate from './HotCate';
import Top10 from './Top10';


const CookBookUI = (props) => {
  const swiper = memoize(list => {
    return list.slice(0, 5)
  })
  
  const top10 = memoize(list => {
    return list.slice(0, 10)
  }) 

  return (
    <Container>
    <header>美食大全</header>
    <Swiper list={swiper(props.list)}></Swiper>
    <Search></Search>
    <HotCate></HotCate>
    <Top10 list={top10(props.list)}></Top10>
    </Container>
  )
}

CookBookUI.propTypes = {
  list: PropTypes.array
}

export default CookBookUI