import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrapper = styled.section`
  flex-basis: 100%;
  margin-bottom: 1rem;
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
    margin-right: 1.5rem;
  `}
`;

export const WrapperFilter = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  width: 4.586rem;
  height: 4.586rem;
  margin-right: 0.2418rem;
  padding-left: 0.6671rem;
  background-color: #ebebeb;
`;

export const Logo = styled.img`
  width: 3.335rem;
  height: 4.586rem;
  object-fit: contain;
`;
