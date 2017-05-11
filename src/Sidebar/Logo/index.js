import React from 'react';
import './styles.css'

export default () => {
  return (
    <img src={`${require('./logo.png')}`} className="logo"
      srcSet={`
         ${require('./logo@2x.png')} 2x,
         ${require('./logo@3x.png')} 3x
      `}
      alt="logo" />
  );
};
