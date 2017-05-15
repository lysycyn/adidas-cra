/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import media from '../styled-components/media';

const Wrapper = styled.section`
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  ${media.sm('max')`
    flex-direction: column;
    align-items: start;
  `}
`;

const Button = styled.button`
  display: inline-block;
  margin-right: 2rem;
  font-size: 5rem;
  line-height: 7rem;
  font-family: "avenir";
  font-weight: 700;
  color: #ebebeb;
  text-transform: uppercase;

  ${media.sm('min')`
    font-size: 2.5rem;
    margin-right: 0.6rem;
    line-height: 2.5rem;
  `}

  ${props => props.isSize && `
    color: #ebebeb;
  `}

  ${props => props.isActive && `
    color: #4d42f8;
  `}
`;

const WrapperFilter = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  width: 4.5rem;
  padding-left: .6rem;
  margin-right: 1.7rem;
  height: 4.5rem;
  background-color: #ebebeb;
`;

const WrapperGender = styled.div`
  margin-right: 1.2rem;
`;
const WrapperSize = styled.div`

`;

const Title = styled.span`
  display: inline-block;
  margin-right: 5rem;
  font-family: "avenir";
  font-size: 5rem;
  line-height: 7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
  ${media.sm('min')`
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-right: 1.2rem;
  `}
`;

const Logo = styled.img`
  width: 3.3rem;
  height: 4.5rem;
  object-fit: contain;
`;

export default () => (
  <Wrapper>
    <Grid fluid>
      <WrapperFlex>
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
    </Grid>
  </Wrapper>
);
