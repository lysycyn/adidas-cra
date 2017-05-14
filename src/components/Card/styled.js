import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrapper = styled.div`
  position: relative;
  padding: .2rem;
  margin-bottom: 1.5rem;

  ${media.lg('min')`
    padding: .3rem;
    margin-bottom: 2.084rem;
  `}
  font-size: 0;
  background: #ebebeb;

`;

export const Image = styled.img`
  width: 100%;
  min-height: 16.416%;
  object-fit: contain;
`;

export const BuyBtn = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 0.2rem;
  padding: 1rem;
  font-size: 1.5rem;
  ${media.lg('min')`
    margin-top: 0.3rem;
    padding: 2.251rem;
    font-size: 3rem;
  `}
  text-align: center;
  font-family: "avenir";
  font-weight: 700;
  background: linear-gradient(107deg, #0c09bf, #966dd8);
`;
