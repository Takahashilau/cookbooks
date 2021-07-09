import React from 'react';
import PropTypes from 'prop-types'

import { Top10Wrap } from './StyledCookBook';

const Top10 = (props) => {
  return (
    <Top10Wrap>
      <h1>热门分类</h1>
      <ul>
        {
          props.list.map(value => {
            return (
              <li key={value.id}>
                <div>
                  <img src={value.img} alt="" />
                </div>
                <div>
                  <p>{value.name}</p>
                  <p><span>{value.all_click}</span>浏览 <span>{value.favorites}</span>收藏</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </Top10Wrap>
  );
}

Top10.propTypes = {
  list: PropTypes.array
}

export default Top10;