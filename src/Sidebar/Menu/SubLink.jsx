import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import c from '../../styled/config';

export default styled(NavLink)`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 2.4rem;
  text-transform: uppercase;
  font-family: ${c.fontBody.andale};
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.7rem;
  color: ${c.colors.sidebarGrey};
  &.is-active {
    color: #fff;
    opacity: 1;
  }
`;
