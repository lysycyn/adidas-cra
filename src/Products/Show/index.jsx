import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Gallery from './Gallery';
import ProductHeader from './Header';
import Description from './Description';
import ButtonBuyNow from './ButtonBuyNow';
import media from '../../styled/media';
import { get } from '../../api';

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
  constructor(props) {
    super(props);
    this.state = { product: {}, activeColorIndex: 0 };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  handleToggleColor(activeColorIndex) {
    this.setState({ activeColorIndex });
  }

  fetchData(props) {
    const { group, type, id } = props.match.params;
    get(`v1/products/${group}/${type}/${id}`).then(product => this.setState({ product }));
  }

  render() {
    const { product, activeColorIndex } = this.state;
    return (
      <Wrapper>
        <Content>
          <Header>
            <Grid fluid>
              <ProductHeader
                colors={colors}
                activeColor={colors[activeColorIndex]}
                onChange={this.handleToggleColor}
                title={product.title}
                price={product.price}
                currency={product.currency}
              />
              <Gallery images={product.images} />
              <Description>
                {product.description}
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
