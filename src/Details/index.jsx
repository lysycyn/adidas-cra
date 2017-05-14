/* eslint-disable global-require */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Sale from '../components/Sale';
import BigImage from './BigImage';
import SmallImage from './SmallImage';
import {
  Wrapper,
  Content,
  BuyNowBtn,
  Header,
  Title,
  ButtonColor,
  FlexWrapper,
  SaleWrapper,
  ButtonsWrapper,
  Price,
  ButtonSave,
  PhotosWrapper,
  Lines,
  ButtonMore,
  Description,
} from './styled';

export default () => (
  <Wrapper>
    <Content>
      <Header>
        <Grid fluid>
          <Row top="xs" between="xs">
            <Col xs={12} sm={3}>
              <Title>Ultra Boost</Title>
            </Col>
            <Col xs={12} sm={6}>
              <Row end middle="xs">
                <Col xs={12}>
                  <FlexWrapper>
                    <ButtonsWrapper>
                      <ButtonColor color="#c5c5c5" />
                      <ButtonColor color="#4d87ca" />
                      <ButtonColor color="#4a4a4a" />
                      <ButtonColor color="#e0e0e0" />
                    </ButtonsWrapper>
                    <SaleWrapper>
                      <Sale />
                    </SaleWrapper>
                  </FlexWrapper>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row start="xs" end="sm">
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
              src={require('../assets/img/boot_big.jpg')}
              srcSet={`${require('../assets/img/boot_big@2x.jpg')} 2x
                    ${require('../assets/img/boot_big@3x.jpg')} 3x`}
              alt="bigphoto"
            />
          </Row>
          <PhotosWrapper>
            <Row middle="xs">
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../assets/img/boot_sm1.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../assets/img/boot_sm2.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../assets/img/boot_sm1.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage isActive src={require('../assets/img/boot_sm2.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={3}>
                <Lines />
              </Col>
              <Col sm={4} md={2} lg={1}>
                <ButtonMore>
                  See<br />
                  More<br />
                  Photos
                </ButtonMore>
              </Col>
            </Row>
          </PhotosWrapper>
          <Description>
            <b>Adidas</b> is a German multinational corporation,
            headquartered in Herzogenaurach, Germany, that designs and
            manufactures shoes, clothing and accessories.
          </Description>
        </Grid>
      </Header>
    </Content>
    <BuyNowBtn>Buy Now</BuyNowBtn>
  </Wrapper>
);
