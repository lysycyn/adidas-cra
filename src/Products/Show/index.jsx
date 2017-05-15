/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Label from '../../components/Label';
import ButtonColor from './Header/ButtonColor';
import ButtonSave from './Header/ButtonSave';
import Price from './Header/Price';
import Title from './Header/Title';
import BigImage from './Gallery/BigImage';
import SmallImage from './Gallery/SmallImage';
import Lines from './Gallery/Lines';
import More from './Gallery/Button';
import Description from './Description';
import ButtonBuyNow from './ButtonBuyNow';
import media from '../../styled-components/media';

const Wrapper = styled.section`
  padding: 1.1rem 0;
  flex-basis: 100%;
  ${media.sm('max')`
    padding: 4rem 0;
  `}
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  ${media.sm('max')`
    margin-top: 15rem;
    justify-content: space-between;
  `}
  ${media.sm('min')`
    justify-content: flex-end;
  `}
`;

const LabelWrapper = styled.div`
  display: inline-block;
  margin-left: 2rem;
  ${media.sm('max')`
    order: 1;
    margin-left: 0;
  `}
`;

const ButtonsWrapper = styled.div`
  ${media.sm('max')`
    order: 2;
  `}
`;

const GalleryWrapper = styled.div`
  margin-bottom: 3rem;
`;

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
              <Row middle="xs">
                <Col xs={12}>
                  <FlexWrapper>
                    <ButtonsWrapper>
                      <ButtonColor color="#c5c5c5" />
                      <ButtonColor color="#4d87ca" />
                      <ButtonColor color="#4a4a4a" />
                      <ButtonColor color="#e0e0e0" />
                    </ButtonsWrapper>
                    <LabelWrapper>
                      <Label>Sale</Label>
                    </LabelWrapper>
                  </FlexWrapper>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row start="xs" end="sm">
            <Col xs={6}>
              <Price>170</Price>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <ButtonSave />
            </Col>
          </Row>
          <Row center="lg">
            <BigImage
              src={require('../../assets/img/boot_big.jpg')}
              srcSet={`${require('../../assets/img/boot_big@2x.jpg')} 2x
                    ${require('../../assets/img/boot_big@3x.jpg')} 3x`}
              alt="bigphoto"
            />
          </Row>
          <GalleryWrapper>
            <Row middle="xs">
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../../assets/img/boot_sm1.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../../assets/img/boot_sm2.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage src={require('../../assets/img/boot_sm1.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={2}>
                <SmallImage isActive src={require('../../assets/img/boot_sm2.jpg')} />
              </Col>
              <Col xs={2} md={2} lg={3}>
                <Lines />
              </Col>
              <Col xs={2} md={2} lg={1}>
                <More />
              </Col>
            </Row>
          </GalleryWrapper>
          <Description>
            <b>Adidas</b> is a German multinational corporation,
            headquartered in Herzogenaurach, Germany, that designs and
            manufactures shoes, clothing and accessories.
          </Description>
        </Grid>
      </Header>
    </Content>
    <ButtonBuyNow />
  </Wrapper>
);
