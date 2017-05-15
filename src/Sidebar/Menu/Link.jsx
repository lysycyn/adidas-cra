/* eslint-disable global-require */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  position: relative;
  display: block;
  text-transform: uppercase;
  font-family: "avenir";
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  margin-bottom: 2.42rem;
  transition: .6s;
  color: #3a3a3a;
  &:hover{
    color: #fff;

  }
  &.is-active {
    color: #ffffff;
    opacity: 1;
  }

  ${props => props.isSubNav && `
    padding-right: 2.75rem;
    display: inline-block;
    &:after {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      right: 0;
      height: 2.75rem;
      width: 2.75rem;
      background: url(${require('./icon-arrow.svg')}) center no-repeat;
    }
  `}
`;
