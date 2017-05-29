import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.nav`
  text-align: center;
  ${props => props.isSub && `
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-bottom: 2.25rem;
    display: flex;
  `}
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Button onChange={this.handleToggleMenu} isOpen={this.state.isOpen}>
          {this.props.title}
        </Button>
        <LinksWrapper>
          {this.state.isOpen && this.props.children}
        </LinksWrapper>
      </Wrapper>
    );
  }
}

export default Nav;
