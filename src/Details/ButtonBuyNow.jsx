import React from 'react';
import styled from 'styled-components';
import media from '../styled-components/media';

const Wrapper = styled.div`
  margin: 0;
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 3rem 0;
  font-family: "avenir";
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #4949aa, #27275d);
  ${media.sm('min')`
    margin-left: 34.5%;
    padding: 2rem 0;
    width: 65.5%;
  `}
  ${media.lg('min')`
    margin-left: 41.4rem;
    padding: 3rem 0;
    width: calc(100% - 41.4rem);
  `}
`;
export default () => <Wrapper>Buy Now</Wrapper>;
