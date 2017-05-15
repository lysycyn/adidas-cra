import React from 'react';
import styled from 'styled-components';
import media from '../../../styled-components/media';

const Wrapper = styled.button`
  width: 8rem;
  height: 8rem;
  font-family: "avenir";
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background: #e3e3e3;
  text-transform: uppercase;
  border-radius: 4rem;
  ${media.sm('max')`
    display: none;
  `}
  ${media.sm('min')`
    // margin-top: -5rem;
  `}
`;

export default () => <Wrapper>Save</Wrapper>;
