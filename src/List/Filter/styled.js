import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrapper = styled.section`
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-family: "avenir";
  ${media.lg('min')`
    margin-right: 1.2rem;
    font-size: 2.4rem;
    line-height: 3.3rem;
  `}
  font-weight: 700;
  color: #ebebeb;
  text-transform: uppercase;

  ${props => props.isSize && `
    font-size: 24px;
    ${media.md('min')`
      margin-right: 0.7rem;
    `}
    ${media.lg('min')`
      margin-right: 1.25rem;
    `}
    color: #ebebeb;
  `}

  ${props => props.isActive && `
    color: #4d42f8;
  `}
`;

export const Title = styled.span`
  display: inline-block;
  margin-right: 1.417rem;
  font-family: "avenir";
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
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
