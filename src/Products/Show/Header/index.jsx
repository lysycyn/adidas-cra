import React from 'react';
import styled from 'styled-components';
import media from '../../../styled/media';
import ButtonColor from './ButtonColor';
import ButtonSave from './ButtonSave';
import Price from './Price';
import Title from './Title';
import Label from '../../../components/Label';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${media.sm('max')`
    flex-direction: column;
  `}
`;

const LeftWrapper = styled.div`
  flex-basis: 25%;
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

const PriceWrapper = styled.div`
  ${media.sm('max')`
    order: 1;
    padding-bottom: 1.5rem;
  `}
`;

const Header = ({ colors, onChange, activeColorIndex }) => (
  <HeaderWrapper>
    <LeftWrapper>
      <Title>Ultra Boost</Title>
      <ButtonSave color={colors[activeColorIndex]} />
    </LeftWrapper>
    <RightWrapper>
      <TopWrapper>
        <ButtonsWrapper>
          {colors.map((c, index) => ( // eslint-disable-next-line
            <ButtonColor
              // eslint-disable-next-line
              key={index}
              onClick={() => onChange(index)}
              color={c}
            />
          ))}
        </ButtonsWrapper>
        <LabelWrapper>
          <Label>Sale</Label>
        </LabelWrapper>
      </TopWrapper>
      <PriceWrapper>
        <Price color={colors[activeColorIndex]}>170</Price>
      </PriceWrapper>
    </RightWrapper>
  </HeaderWrapper>
);

export default Header;
