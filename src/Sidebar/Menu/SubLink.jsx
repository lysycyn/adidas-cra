import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  display: inline-block;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 3.3rem;
  margin-bottom: 2.42rem;
  text-transform: uppercase;
  font-family: "andale";
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.7rem;
  color: #3a3a3a;
  &.is-active {
    color: #ffffff;
    opacity: 1;
  }
`;
