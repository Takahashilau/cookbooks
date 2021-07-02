import styled from 'styled-components'

const Container = styled.div `
  header {
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    color: #fff;
    background-color: #ee742f;
  }
`

const SwiperWrap = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  position: relative;

  .slider.am-carousel {
    position: static !important;
  }
`

const HotCateWrap = styled.div `
  h1 {
    height: .5rem;
    padding-left: .1rem;
    color: #666;
    line-height: .5rem;
    background-color: #fff;
    border-bottom: solid 1px #ccc;
  }
  > div {
    background-color: #fff;
    padding-top: .2rem;
    .grid-item {
      padding-bottom: .1rem;
      img {
        width: .6rem;
        height: .6rem;
        margin-bottom: .04rem;
        border-radius:0.05rem;
      }
    }
    .am-grid-item-content {
      padding: 0 !important;
    }
  }
`

export { Container, SwiperWrap, HotCateWrap }