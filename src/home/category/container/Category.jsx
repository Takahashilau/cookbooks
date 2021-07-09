import React, { Component } from 'react';
import { CategoryWrap } from './StyledCategory';

class Category extends Component {
  render() {
    return (
      <CategoryWrap>
        <nav>
          <ul>
            <li>分类</li>
            <li>食材</li>
            <li className="slide"></li>
          </ul>
        </nav>
      </CategoryWrap>
    );
  }
}

export default Category;