import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';
import media from '../../styled-components/media';

const Wrapper = styled.div`
  position: relative;
  padding: 0.8rem;
  margin-bottom: 1rem;
  ${media.lg('min')`
    padding: 0.8rem;
    margin-bottom: 1rem;
  `}
  font-size: 0;
  background: #ebebeb;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const BuyBtn = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 3.5rem 0;
  font-size: 3.75rem;
  line-height: 5rem;
  color: #000;
  text-align: center;
  font-family: "avenir";
  font-weight: 700;
  background: #fff;
  ${media.lg('min')`
    padding: 2rem;
    font-size: 2.4rem;
  `}
  ${props => props.isSale && `
    background: linear-gradient(107deg, #0c09bf, #966dd8);
    color: #fff;
  `}
`;

const SaleWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export default props => (
  <Wrapper>
    ${props.isSale &&
      <SaleWrapper>
        <Label>Sale</Label>
      </SaleWrapper>}
    <Image src={props.src} />
    <BuyBtn isSale={props.isSale} to={props.to}>{props.price}</BuyBtn>
  </Wrapper>
);
