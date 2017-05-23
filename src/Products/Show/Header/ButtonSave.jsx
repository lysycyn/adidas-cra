import React from 'react';
import styled from 'styled-components';
import media from '../../../styled/media';
import c from '../../../styled/config';

const Wrapper = styled.button`
  width: 8rem;
  height: 8rem;
  font-family: ${c.fontBody.avenir};
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background: #e3e3e3;
  text-transform: uppercase;
  border-radius: 4rem;
  ${media.sm('max')`
    display: none;
  `}
`;

export default () => <Wrapper>Save</Wrapper>;
