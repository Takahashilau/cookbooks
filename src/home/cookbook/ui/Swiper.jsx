import React from 'react';
// import PropTypes from 'prop-types'

import { Carousel } from 'antd-mobile'
import { SwiperWrap } from './StyledCookBook';

const Swiper = (props) => {
  const list = props.list.toJS()
  return (
    <SwiperWrap>
      <Carousel 
          autoplay={true} 
          infinite
      >
        {
          list.length > 0 && list.map(value => {
            return <img onClick={props.onGotoDetail(value.name)} key={value.id} src={value.img} alt="" />
          })
        }
      </Carousel>
    </SwiperWrap>
  );
}

// Swiper.propTypes = {
//   list: PropTypes.array
// }

export default Swiper;