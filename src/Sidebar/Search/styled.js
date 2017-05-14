/* eslint-disable global-require */
import styled from 'styled-components';
import media from '../../styled-components/media';

export const Form = styled.form`
  position: relative;
  ${media.lg('min')`
    margin-bottom: 12.342rem;
  `}
  ${media.lg('max')`
    margin-bottom: 12em;
  `}
  ${props => props.isSearch && `
    &:before{
      position: absolute;
      content: "";
      display: block;
      width: 2.5rem;
      height: 2.66rem;
      top: 1.3rem;
      left: 1.167rem;
      background-image: url(${require('./icon-search.svg')});
      background-size: cover;
    }
  `}
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.9rem;
  padding-left: 4.2rem;
  color: #3a3a3a;
  font-family: "avenir";
  font-size: 2.4rem;
  text-transform: uppercase;
  border: none;
  border-bottom: 0.4rem solid rgba(55,55,55,0.56);
  background: #000;
  cursor: pointer;
`;
