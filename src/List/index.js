import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from '../components/Card';
import { Wrapper, Hr } from './styled';

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
          <Card isSale src={require('../assets/img/boot2.jpg')} price="170$" to="/item" />
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
