import React from 'react';
import styled from 'styled-components';
import media from '../styled-components/media';

const Wrapper = styled.span`
  display: inline-block;
  font-family: "avenir";
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  background: #ff5c5c;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  ${media.lg('min')`
    font-size: 1.4rem;
  `}
`;

export default props => <Wrapper {...props}>Sale</Wrapper>;
