import React from 'react';
import styled from 'styled-components';
import media from '../../../styled/media';

const Wrapper = styled.div`
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  ${media.md('min')`
    margin-top: -10rem;
  `}
`;

export default props => (
  <Wrapper>
    <Image src={props.src} srcSet={props.srcSet} alt={props.alt} />
  </Wrapper>
);
