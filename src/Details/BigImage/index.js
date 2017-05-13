import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  z-index: -1;
`

export default props => {
  return (
    <Wrapper>
      <img src={props.src} srcSet={props.srcSet} alt={props.alt} />
    </Wrapper>
  )
}
