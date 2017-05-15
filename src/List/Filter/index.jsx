/* eslint-disable global-require */
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import {
  Wrapper,
  Title,
  Button,
  WrapperFlex,
  WrapperFilter,
  WrapperGender,
  WrapperSize,
  Logo,
} from './styled';

export default () => (
  <Wrapper>
    <Grid fluid>
      <WrapperFlex>
        {/* <Row middle="xs"> */}
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
        <WrapperGender>
          <Button isActive>Man</Button>
          <Button>Women</Button>
        </WrapperGender>
        <WrapperSize>
          <Title>Size</Title>
          <Button isSize>36</Button>
          <Button isSize>37</Button>
          <Button isSize>38</Button>
          <Button isSize>39</Button>
          <Button isSize isActive>40</Button>
          <Button isSize>41</Button>
          <Button isSize>42</Button>
        </WrapperSize>
      </WrapperFlex>
      {/* </Row> */}
    </Grid>
  </Wrapper>
);
