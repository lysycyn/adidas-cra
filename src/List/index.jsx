/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from '../components/Card';
import media from '../styled-components/media';

const Wrapper = styled.section`
  padding: 1.1rem 0;
  ${media.lg('min')`
    padding: 1.1rem 0;
  `}
`;

const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1.7rem;
  background-color: #ebebeb;
  height: 0.5rem;
  border: none;
  outline: none;
`;

export default () => (
  <Wrapper>
    <Filter />
    <Hr />
    <Grid fluid>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card src={require('../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card src={require('../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../assets/img/boot2.jpg')} price="170$" to="/item" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card isSale src={require('../assets/img/boot1.jpg')} price="170$" to="/item" />
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
