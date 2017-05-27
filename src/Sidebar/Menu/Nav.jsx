import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${props => props.isSub && `
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-bottom: 2.25rem;
    display: flex;
  `}
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(oldState => ({
      isOpen: !oldState.isOpen,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Button onChange={this.handleToggleMenu} isOpen={this.state.isOpen}>
          {this.props.title}
        </Button>
        {this.state.isOpen && this.props.children}
      </Wrapper>
    );
  }
}

export default Nav;
