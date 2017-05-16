/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../styled-components/media';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 7.8rem;
  height: 7.8rem;
  ${media.sm('max')`
    width: 8rem;
    height: 8rem;
  `}
  ${media.sm('max')`
    margin: 0;
  `}
  object-fit: contain;
`;

export default () => (
  <Link to="/">
    <Image
      src={`${require('./logo.png')}`}
      srcSet={`
         ${require('./logo@2x.png')} 2x,
         ${require('./logo@3x.png')} 3x
      `}
    />
  </Link>
);
