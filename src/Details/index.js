import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Sale from "../components/Sale"
import BigImage from "./BigImage"
import {
  Wrapper,
  Content,
  BuyNowBtn,
  Header,
  Title,
  ButtonsWrapper,
  ButtonColor,
  Price,
  ButtonSave,
} from "./styled"

export default () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Grid fluid>
            <Row top="xs" between="xs">
              <Col xs={12} sm={5}>
                <Title>Ultra Boost</Title>
              </Col>
              <Col xs={12} sm={4}>
                <Row end="xs" middle="xs">
                  <ButtonColor color="#c5c5c5" />
                  <ButtonColor color="#4d87ca" />
                  <ButtonColor color="#4a4a4a" />
                  <ButtonColor color="#e0e0e0" />
                  <Sale inDetails />
                </Row>
              </Col>
            </Row>
            <Row end="xs">
              <Col xs={6}>
                <Price>170$</Price>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <ButtonSave>Save</ButtonSave>
              </Col>
            </Row>
            <Row center="lg">
              <BigImage
                src={require("../assets/img/boot_big.jpg")}
                srcSet={`${require("../assets/img/boot_big@2x.jpg")} 2x
                    ${require("../assets/img/boot_big@3x.jpg")} 3x`}
                alt="bigphoto"
              />
            </Row>

          </Grid>
        </Header>
      </Content>
      <BuyNowBtn>Buy Now</BuyNowBtn>
    </Wrapper>
  )
}

{
  /* <BigImage
  src={require("../assets/img/boot_big.jpg")}
  srcSet={`${require("../assets/img/boot_big@2x.jpg")} 2x
    ${require("../assets/img/boot_big@3x.jpg")} 3x`}
  alt="bigphoto"

  src="sdf"
  srcSet="sdf"
  alt="bigphoto"
/> */
}
