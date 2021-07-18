import styled from "styled-components";
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const ListContainer = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  height:100%;
  display: flex;
  flex-direction: column;
  ul {
    flex: 1;
    overflow-y: scroll;
  }
`

const SubTitle = ellipsis(
  styled.h2 ``
)

const ListWrap = border(
  styled.li `
    display: flex;
    padding: .1rem;
    background-color: #fff;
    img {
      margin-right: .15rem;
    }
    > div:last-child {
      h1 {
        font-size: .16rem;
        line-height: .3rem;
      }
      h2 {
        font-weight: normal;
      }
      h3 {
        font-size: .12rem;
        font-weight: normal;
        transform: scale(.8)
        line-height: .25rem;
      }
    }
  `
)

export {
  ListWrap,
  SubTitle,
  ListContainer
}