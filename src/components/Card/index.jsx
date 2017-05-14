import React from 'react';
import { Wrapper, Image, BuyBtn, SaleWrapper } from './styled';
import Sale from '../Sale';

export default props => (
  <Wrapper>
    ${props.isSale &&
      <SaleWrapper>
        <Sale />
      </SaleWrapper>}
    <Image src={props.src} />
    <BuyBtn isSale={props.isSale} to={props.to}>{props.price}</BuyBtn>
  </Wrapper>
);
