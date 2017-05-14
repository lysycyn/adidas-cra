import React from 'react';
import { Wrapper, Image, BuyBtn } from './styled';
import Sale from '../Sale';

export default props => (
  <Wrapper>
    ${props.isSale && <Sale inCard />}
    <Image src={props.src} />
    <BuyBtn to={props.to}>{props.price}</BuyBtn>
  </Wrapper>
);
