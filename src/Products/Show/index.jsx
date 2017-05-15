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

const GalleryWrapper = styled.div`
  margin-bottom: 3rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${media.sm('max')`
    flex-direction: column;
  `}
`;

const LeftWrapper = styled.div`
  flex-basis: 25%;
  ${media.sm('max')`
    flex-basis: 100%;
  `}
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  ${media.sm('max')`
    width: 100%;
    justify-content: space-between;
  `}
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.sm('max')`
    justify-content: space-between;
    order: 2;
  `}
`;

const ButtonsWrapper = styled.div`
  ${media.sm('max')`
    order: 2;
  `}
`;

const LabelWrapper = styled.div`
  margin-left: 2rem;
  ${media.sm('max')`
    margin-left: 0;
    order: 1;
  `}
`;

const PriceWrapper = styled.div`
  ${media.sm('max')`
    // order: 1;
  `}
`;

export default () => (
  <Wrapper>
    <Content>
      <Header>
        <Grid fluid>
          <HeaderWrapper>
            <LeftWrapper>
              <Title>Ultra Boost</Title>
              <ButtonSave />
            </LeftWrapper>
            <RightWrapper>
              <TopWrapper>
                <ButtonsWrapper>
                  <ButtonColor color="#c5c5c5" />
                  <ButtonColor color="#4d87ca" />
                  <ButtonColor color="#4a4a4a" />
                  <ButtonColor color="#e0e0e0" />
                </ButtonsWrapper>
                <LabelWrapper>
                  <Label>Sale</Label>
                </LabelWrapper>
              </TopWrapper>
              <PriceWrapper>
                <Price>170</Price>
              </PriceWrapper>
            </RightWrapper>
          </HeaderWrapper>
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
