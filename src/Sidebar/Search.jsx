/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import media from '../styled/media';
import c from '../styled/config';

const Form = styled.form`
  position: relative;
  ${media.lg('min')`
    margin-bottom: 8rem;
  `}
  ${media.lg('max')`
    margin-bottom: 10rem;
  `}
  ${props => props.isSearch && `
    &:before{
      position: absolute;
      content: "";
      display: block;
      width: 3.5rem;
      height: 3.75rem;
      top: .5rem;
      left: 1rem;
      background-image: url(${require('./icon-search.svg')});
      background-size: cover;
      background-repeat: no-repeat;
    }
  `}
  ${media.sm('max')`
    display: none;
  `}
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.9rem;
  padding-left: 5.5rem;
  color: ${c.colors.sidebarGrey};
  font-family: ${c.fontBody.avenir};
  font-size: 3rem;
  text-transform: uppercase;
  border: none;
  border-bottom: 0.4rem solid ${c.colors.sidebarGrey};
  &:hover, &:focus{
    border-bottom: 0.4rem solid ${c.colors.sidebarLight};
    transition: ${c.transition};
  }
  background: #000;
  cursor: pointer;
`;

export default () => (
  <Form isSearch>
    <Input />
  </Form>
);
