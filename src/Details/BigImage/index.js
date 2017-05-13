import React from "react"
import styled from "styled-components"
import { Col } from "react-flexbox-grid"

const Wrapper = styled.div`
  z-index: -1;
`

const Image = styled.img`
  width: 100%;
  margin-top: -10rem;
`

export default props => {
  return (
    <Wrapper>
      <Col xs={12} md={10} lg={8}>
        <Image src={props.src} srcSet={props.srcSet} alt={props.alt} />
      </Col>
    </Wrapper>
  )
}
