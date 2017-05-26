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

class Product extends Component {
  constructor() {
    super();
    this.state = { activeColor: '' };
    this.toggleColor = this.toggleColor.bind(this);
  }
  toggleColor(color) {
    this.setState({ activeColor: color });
  }
  render() {
    const { activeColor } = this.state;
    return (
      <Wrapper>
        <Content>
          <Header>
            <Grid fluid>
              <ProductHeader activeColor={activeColor} onChange={this.toggleColor} />
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
