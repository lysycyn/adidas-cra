import React from 'react';
import styled from 'styled-components';
import c from '../../styled/config';
import iconArrow from './icon-arrow.svg';

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  margin-top: 1.7rem;
  padding-right: 2rem;
  margin-bottom: 1.5rem;
  font-family: ${c.fontBody.avenir};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  text-transform: uppercase;
  transition: ${c.transition};
  color: ${c.colors.sidebarLight};
  cursor: pointer;
`;

const Arrow = styled.span`
  position: absolute;
  display: block;
  content: "";
  top: .7rem;
  right: 0;
  height: 1rem;
  width: 1rem;
  border-right: .3rem solid ${c.colors.sidebarLight};
  border-bottom: .3rem solid ${c.colors.sidebarLight};
  transform: rotate(45deg);

  ${props => props.isOpen && `
    top: 1.5rem;
    transform: rotate(225deg);
  `}
  transition: ${c.transition};
`;

export default ({ onChange, isOpen, children }) => (
  <Button onClick={onChange} isOpen={isOpen}>
    {children}
    <Arrow src={iconArrow} isOpen={isOpen} />
  </Button>
);
