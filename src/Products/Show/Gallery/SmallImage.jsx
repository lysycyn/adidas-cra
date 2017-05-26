import React from 'react';
import styled from 'styled-components';
import c from '../../../styled/config';

const Wrapper = styled.div`
  border: 5px solid #fff;
  ${props => props.isActive && `border: 5px solid ${c.colors.galleryActiveBorder}`}
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ isActive, alt, src, srcSet, onChange, index }) => (
  <Wrapper isActive={isActive}>
    <Image src={src} srcSet={srcSet} alt={alt} onClick={() => onChange(index)} />
  </Wrapper>
);
