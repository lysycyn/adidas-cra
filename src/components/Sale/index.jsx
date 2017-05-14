import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-block;
  font-family: "avenir";
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: #ff5c5c;
  text-transform: uppercase;
  padding: .5rem 1.7rem;

  ${props => props.inCard && `
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  `}

  ${props => props.inDetails && `
    margin-left: 2rem;
  `}
`;

export default props => <Wrapper {...props}>Sale</Wrapper>;
