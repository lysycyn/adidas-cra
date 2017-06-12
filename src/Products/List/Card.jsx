import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';
import media from '../../styled/media';
import c from '../../styled/config';
import Price from '../../components/FormattedPrice';
import { SALE } from '../../constants';

const OutWrapper = styled.div`
  padding: 0 .2rem;
`;

const Wrapper = styled.div`
  position: relative;
  padding: .5rem;
  margin-bottom: 1.4rem;
  font-size: 0;
  background: ${c.colors.listGrey};
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const BuyBtn = styled(Link)`
  display: block;
  width: 100%;
  margin-top: .5rem;
  padding: 2.5rem 0;
  font-size: 2.75rem;
  line-height: 3rem;
  color: #000;
  text-align: center;
  font-family: ${c.fontBody.avenir};
  font-weight: 700;
  background: #fff;
  ${media.lg('min')`
    padding: 2rem;
    font-size: 2.4rem;
  `}
  ${props => props.isSale > 0.7 && `
    background: ${c.colors.btnBuyBackList};
    color: #fff;
  `}
`;

const SaleWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

export default props => (
  <OutWrapper>
    <Wrapper>
      ${props.isSale > SALE &&
        <SaleWrapper>
          <Label>Sale</Label>
        </SaleWrapper>}
      <Image src={props.src} />
      <BuyBtn isSale={props.isSale} to={props.to}>
        <Price currency={props.currency}>{props.price}</Price>
      </BuyBtn>
    </Wrapper>
  </OutWrapper>
);
