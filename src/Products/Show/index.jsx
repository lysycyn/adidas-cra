import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Gallery from './Gallery';
import ProductHeader from './Header';
import Description from './Description';
import ButtonBuyNow from './ButtonBuyNow';
import media from '../../styled/media';

const Wrapper = styled.section`
  padding: 1.1rem 0;
  flex-basis: 100%;
  ${media.sm('max')`
    padding: 4rem 0;
  `}
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

class Product extends Component {
  constructor() {
    super();
    this.state = { activeColorIndex: 0 };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  handleToggleColor(activeColorIndex) {
    this.setState({ activeColorIndex });
  }

  render() {
    const { activeColorIndex } = this.state;
    return (
      <Wrapper>
        <Content>
          <Header>
            <Grid fluid>
              <ProductHeader
                colors={colors}
                activeColor={colors[activeColorIndex]}
                onChange={this.handleToggleColor}
              />
              <Gallery />
              <Description>
                <b>Adidas</b> is a German multinational corporation,
                headquartered in Herzogenaurach, Germany, that designs and
                manufactures shoes, clothing and accessories.
              </Description>
            </Grid>
          </Header>
        </Content>
        <ButtonBuyNow />
      </Wrapper>
    );
  }
}

export default Product;
