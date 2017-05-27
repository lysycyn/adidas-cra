import React from 'react';
import styled from 'styled-components';
import media from '../styled/media';
import iconBurger from './icon-burger.svg';

const Burger = styled.img`
  ${media.sm('min')`
    display: none;
  `}
`;

export default ({ onChange }) => <Burger onClick={onChange} src={iconBurger} />;
