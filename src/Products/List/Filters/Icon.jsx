/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 3.3rem;
  height: 4.5rem;
  object-fit: contain;
`;

export default (
  <Image
    src={require('./filter.png')}
    srcSet={`
           ${require('./filter@2x.png')} 2x,
           ${require('./filter@3x.png')} 3x
        `}
    alt="фильтр"
  />
);
