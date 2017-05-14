import styled from 'styled-components';
import { media } from '../../../styled-components/media';

export const Wrapper = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  ${media.md('max')`
    margin-right: 10rem;
  `}
  width: 4.586rem;
  height: 4.586rem;
  margin-right: 3rem;
  padding-left: 0.6671rem;
  background-color: #ebebeb;
`;

export const Logo = styled.img`
  width: 3.335rem;
  height: 4.586rem;
  object-fit: contain;
`;
