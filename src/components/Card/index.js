import React from "react"
import { Col } from "react-flexbox-grid"
import { Wrapper, Image, BuyBtn } from "./styled"
import Sale from "../Sale"

export default props => {
  return (
    <Wrapper>
      ${props.isSale && <Sale inCard />}
      <Image src={props.src} />
      <BuyBtn to={props.to}>{props.price}</BuyBtn>
    </Wrapper>
  )
}
