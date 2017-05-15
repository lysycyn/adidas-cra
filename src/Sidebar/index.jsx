import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import media from '../styled-components/media';

const Wrapper = styled.aside`
  padding: 0 1.83rem;
  padding-top: 2.59rem;
  ${media.lg('min')`
    flex: 1 0 41.4rem;
    padding: 0 1.83rem;
    padding-top: 2.59rem;
  `}
  ${media.lg('max')`
    flex: 1 0 34.5%;
  `}
  ${media.sm('max')`
    padding: 0 2rem;
  `}
  ${media.sm('min')`
    min-height: 100vh;
  `}
  background: #000;
`;

export const HideMobile = styled.div`
  ${media.sm('max')`
    display: none;
  `}
`;

export default () => (
  <Wrapper>
    <Logo />
    <HideMobile>
      <Search />
      <Menu />
    </HideMobile>
  </Wrapper>
);
