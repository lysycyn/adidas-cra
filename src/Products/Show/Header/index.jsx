import React from 'react';
import styled from 'styled-components';
import media from '../../../styled/media';
import ButtonColor from './ButtonColor';
import ButtonSave from './ButtonSave';
import PriceWrapper from './Price';
import Title from './Title';
import Label from '../../../components/Label';
import { SALE } from '../../../constants';
import Price from '../../../components/FormattedPrice';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${media.sm('max')`
    flex-direction: column;
  `}
`;

const LeftWrapper = styled.div`
  flex-basis: 35%;
  ${media.sm('max')`
    flex-basis: 100%;
  `}
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  ${media.sm('max')`
    width: 100%;
    justify-content: space-between;
  `}
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.sm('max')`
    justify-content: space-between;
    order: 2;
  `}
`;

const ButtonsWrapper = styled.div`
  ${media.sm('max')`
    order: 2;
  `}
`;

const LabelWrapper = styled.div`
  margin-left: 2rem;
  ${media.sm('max')`
    margin-left: 0;
    order: 1;
  `}
`;

const BottomWrapper = styled.div`
  ${media.sm('max')`
    order: 1;
    padding-bottom: 1.5rem;
  `}
`;

const Header = ({ colors, onChange, activeColor, title, isSale, price, currency }) => (
  <HeaderWrapper>
    <LeftWrapper>
      <Title>{title}</Title>
      <ButtonSave color={activeColor} />
    </LeftWrapper>
    <RightWrapper>
      <TopWrapper>
        <ButtonsWrapper>
          {colors.map((c, index) => (
            <ButtonColor index={index} onClick={() => onChange(index)} color={c} />
          ))}
        </ButtonsWrapper>
        {isSale > SALE &&
          <LabelWrapper>
            <Label>Sale</Label>
          </LabelWrapper>}
      </TopWrapper>
      <BottomWrapper>
        <PriceWrapper color={activeColor}>
          <Price currency={currency}>{price}</Price>
        </PriceWrapper>
      </BottomWrapper>
    </RightWrapper>
  </HeaderWrapper>
);

export default Header;
