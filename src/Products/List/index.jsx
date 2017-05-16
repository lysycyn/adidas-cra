/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import Icon from './Filters/Icon';
import Label from './Filters/Label';
import Button from './Filters/Button';
import media from '../../styled-components/media';

const Wrapper = styled.section`
  padding: 1.1rem 0;
  ${media.lg('min')`
    padding: 1.1rem 0;
  `}
`;

const WrapperFilter = styled.section`
  padding: 0 .2rem;
  padding-bottom: 1.1rem;
  display: flex;
  align-items: center;
  ${media.sm('max')`
    flex-direction: column;
    align-items: start;
  `}
`;

const WrapperIcon = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  width: 4.5rem;
  padding-left: .6rem;
  margin-right: 3rem;
  height: 4.5rem;
  background-color: #ebebeb;
  ${media.md('max')`
    margin-right: 2.1rem;
  `}
`;

const WrapperGender = styled.div`
  margin-right: 5rem;
  ${media.md('max')`
    margin-right: 2.8rem;
  `}
`;

const WrapperSize = styled.div``;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  margin-bottom: 1.4rem;
  background-color: #ebebeb;
  height: 0.4rem;
  border: none;
  outline: none;
`;

const WidthWrapper = styled.div`
  padding: 0 1.3rem;
`;

export default () => (
  <Wrapper>
    <WidthWrapper>
      <WrapperFilter>
        <WrapperIcon>
          <Icon />
        </WrapperIcon>
        <WrapperGender>
          <Button isActive>Man</Button>
          <Button>Women</Button>
        </WrapperGender>
        <WrapperSize>
          <Label>Size</Label>
          <Button isSize>36</Button>
          <Button isSize>37</Button>
          <Button isSize>38</Button>
          <Button isSize>39</Button>
          <Button isSize isActive>40</Button>
          <Button isSize>41</Button>
          <Button isSize>42</Button>
        </WrapperSize>
      </WrapperFilter>
    </WidthWrapper>
    <Hr />
    <WidthWrapper>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card src={require('../../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card src={require('../../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
      </Row>
    </WidthWrapper>
  </Wrapper>
);
