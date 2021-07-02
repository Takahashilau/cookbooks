import React, { Component } from 'react';
import { Carousel } from 'antd-mobile'

import img1 from '@a/images/swiper-1.png'
import img2 from '@a/images/swiper-2.jpeg'
import img3 from '@a/images/swiper-3.jpeg'

import { SwiperWrap } from './StyledCookBook';

class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel 
            autoplay={true} 
            infinite>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </Carousel>
      </SwiperWrap>
    );
  }
}

export default Swiper;