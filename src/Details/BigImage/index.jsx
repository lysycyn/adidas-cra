import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';

const Wrapper = styled.div`
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  ${media.md('min')`
    margin-top: -10rem;
  `}
`;

export default props => (
  <Wrapper>
    <Col xs={12} md={10} lg={9}>
      <Image src={props.src} srcSet={props.srcSet} alt={props.alt} />
    </Col>
  </Wrapper>
);
