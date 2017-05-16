/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import media from '../styled-components/media';

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
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.9rem;
  padding-left: 5.5rem;
  color: #fff;
  font-family: "avenir";
  font-size: 3rem;
  text-transform: uppercase;
  border: none;
  border-bottom: 0.4rem solid rgba(55,55,55,0.56);
  &:hover, &:focus{
    border-bottom: 0.4rem solid #fff;
  }
  background: #000;
  cursor: pointer;
`;

export default () => (
  <Form isSearch>
    <Input />
  </Form>
);
