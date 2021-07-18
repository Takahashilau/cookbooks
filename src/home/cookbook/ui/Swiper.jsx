import React from 'react';
import PropTypes from 'prop-types'

import { Carousel } from 'antd-mobile'
import { SwiperWrap } from './StyledCookBook';

const Swiper = (props) => {
  return (
    <SwiperWrap>
      <Carousel 
          autoplay={true} 
          infinite
      >
        {
          props.list.length > 0 && props.list.map(value => {
            return <img onClick={props.onGotoDetail(value.name)} key={value.id} src={value.img} alt="" />
          })
        }
      </Carousel>
    </SwiperWrap>
  );
}

Swiper.propTypes = {
  list: PropTypes.array
}

export default Swiper;