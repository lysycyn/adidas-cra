import React from 'react';
import logo from './logo.png'
import './styles.css'

export default () => {
  return (
    <img src={logo} className="logo"
      srcSet={`
         ${require('./logo@2x.png')} 2x,
         ${require('./logo@3x.png')} 3x
      `}
      alt="logo" />
  );
};
