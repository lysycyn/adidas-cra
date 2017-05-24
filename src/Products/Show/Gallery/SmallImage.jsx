import React from 'react';
import styled from 'styled-components';
import c from '../../../styled/config';

const Wrapper = styled.div`
  ${props => props.isActive && `border: 5px solid ${c.colors.galleryActiveBorder}`}
`;

const Image = styled.img`
  width: 100%;
`;

export default props => (
  <Wrapper isActive={props.isActive}>
    <Image src={props.src} srcSet={props.srcSet} alt={props.alt} />
  </Wrapper>
);
