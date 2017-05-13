import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  ${props => props.isActive && `border: 5px solid #e8e8ea;`}
`

const Image = styled.img`
  width: 100%;
`

export default props => {
  return (
    <Wrapper isActive={props.isActive}>
      <Image src={props.src} srcSet={props.srcSet} alt={props.alt} />
    </Wrapper>
  )
}
