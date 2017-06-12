/* eslint-disable global-require */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import { imageLink } from '../../constants';
import { get } from '../../api';

const Wrapper = styled.section`
  padding: 1.1rem 0;
  flex-basis: 100%;
`;

const WidthWrapper = styled.div`
  padding: 0 1.3rem;
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps);
  }

  fetchData(props) {
    const { group, type } = props.match.params;
    get(`v1/products/${group}/${type}`).then(data => this.setState({ products: data.items }));
  }

  render() {
    return (
      <Wrapper>
        <WidthWrapper>
          <Row>
            {this.state.products.map((card) => {
              const saleValue = Math.random();
              return (
                <Col xs={12} sm={6} md={4} lg={3} key={card.id}>
                  <Card
                    isSale={saleValue}
                    src={imageLink(card.images[0].id, card.images[0].fileName, 256)}
                    price={card.price}
                    currency={card.currency}
                    to={`${this.props.match.url}/${card.id}`}
                  />
                </Col>
              );
            })}
          </Row>
        </WidthWrapper>
      </Wrapper>
    );
  }
}

export default List;
