import styled from 'styled-components'

const CategoryWrap = styled.div `
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: .44rem;
    background-color: #ee742f;
    ul {
      position: relative;
      display: flex;
      width: 1.4rem;
      height: .3rem;
      border: solid 1px #fff;
      border-radius: .15rem;
      li {
        flex: 1;
        line-height: .3rem;
        text-align: center;
        &.active {
          color: #ee742f;
          z-index: 3;
        }
        &.slide {
          position: absolute;
          background-color: #fff;
          height: .3rem;
          width: .7rem;
          border-radius: .15rem;
          z-index: 2;
        }
        &.slide.right {
          left: .7rem;
        }
      }
    }
  }
`

export {
  CategoryWrap
}