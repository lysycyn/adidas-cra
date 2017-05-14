/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Image from './styled';

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
