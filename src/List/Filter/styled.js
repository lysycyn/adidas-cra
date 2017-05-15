import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrapper = styled.section`
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  ${media.sm('max')`
    flex-direction: column;
    align-items: start;
  `}
`;

export const Button = styled.button`
  display: inline-block;
  margin-right: 2rem;
  font-size: 5rem;
  line-height: 7rem;
  font-family: "avenir";
  font-weight: 700;
  color: #ebebeb;
  text-transform: uppercase;

  ${media.sm('min')`
    font-size: 2.5rem;
    margin-right: 0.6rem;
    line-height: 2.5rem;
  `}

  ${props => props.isSize && `
    color: #ebebeb;
  `}

  ${props => props.isActive && `
    color: #4d42f8;
  `}
`;

export const WrapperFilter = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  width: 4.5rem;
  padding-left: .6rem;
  margin-right: 1.7rem;
  height: 4.5rem;
  background-color: #ebebeb;
`;

export const WrapperGender = styled.div`
  margin-right: 1.2rem;
`;
export const WrapperSize = styled.div`

`;

export const Title = styled.span`
  display: inline-block;
  margin-right: 5rem;
  font-family: "avenir";
  font-size: 5rem;
  line-height: 7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
  ${media.sm('min')`
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-right: 1.2rem;
  `}
`;

export const Logo = styled.img`
  width: 3.3rem;
  height: 4.5rem;
  object-fit: contain;
`;
