import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import Burger from './Burger';
import media from '../styled/media';
import c from '../styled/config';

const Wrapper = styled.aside`
  position: realtive;
  padding: 0 1.8rem;
  padding-top: 2.6rem;
  ${media.lg('min')`
    flex: 1 0 41.4rem;
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

const HeaderWrapper = styled.div`
  ${media.sm('max')`
    display: flex;
    justify-content: space-between;
    align-items: middle;
  `}
`;

export const MenuWrapper = styled.div`
  ${media.sm('max')`
    transition: ${c.transition};
    display: none;
    display: ${props => props.isMenuOpen && 'block'};
  `}
`;

class Sidebar extends Component {
  constructor() {
    super();
    this.state = { isMenuOpen: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Logo />
          <Burger onChange={this.handleToggleMenu} />
        </HeaderWrapper>
        <MenuWrapper isMenuOpen={this.state.isMenuOpen}>
          <Search />
          <Menu />
        </MenuWrapper>
      </Wrapper>
    );
  }
}

export default Sidebar;
