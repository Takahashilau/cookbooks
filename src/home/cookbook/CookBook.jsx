import React, { Component } from 'react';
import { Container } from './StyledCookBook';
import Swiper from './Swiper';
import Search from '@c/search/Search';
import HotCate from './HotCate';

class CookBook extends Component {
  render() {
    return (
      <Container>
        <header>美食大全</header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCate></HotCate>
      </Container>
    )
  }
}

export default CookBook;