/* eslint-disable global-require */

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Title, Button, WrapperFilter, Logo } from './styled';

export default () => (
  <Wrapper>
    <Grid fluid>
      <Row middle="xs">
        <Col sm={1}>
          <WrapperFilter>
            <Logo
              src={require('./filter.png')}
              srcSet={`
                   ${require('./filter@2x.png')} 2x,
                   ${require('./filter@3x.png')} 3x
                `}
              alt="фильтр"
            />
          </WrapperFilter>
        </Col>
        <Col xs={12} sm={4}>
          <Button isActive>Man</Button>
          <Button>Women</Button>
        </Col>
        <Col xs={12} sm={7}>
          <Title>Size</Title>
          <Button isSize>36</Button>
          <Button isSize>37</Button>
          <Button isSize>38</Button>
          <Button isSize>39</Button>
          <Button isSize isActive>40</Button>
          <Button isSize>41</Button>
          <Button isSize>42</Button>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
