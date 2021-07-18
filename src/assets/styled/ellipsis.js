import styled from "styled-components";

const ellipsis = (WrappedComp) => {
  return styled(WrappedComp)`
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({line}) => line};
    -webkit-box-orient: vertical;
`
}

export default ellipsis