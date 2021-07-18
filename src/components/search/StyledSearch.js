import styled from "styled-components";
import border from "@a/styled/border";

const Container = styled.div`
    padding:.1rem .15rem;
    background-color: ${props => props.outerbg};
  `

const InnerContainer = border(
  styled.div `
    display:flex;
    height: .4rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.innerbg};
    svg {
      width: .18rem;
      height: 0.18rem;
      margin-right: .05rem;
    }
    span {
      color: #666;
    }
  `
)

export { 
  Container,
  InnerContainer
}