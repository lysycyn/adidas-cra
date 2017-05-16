import styled from 'styled-components';
import media from '../styled-components/media';

export default styled.span`
  display: inline-block;
  font-family: "avenir";
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background: #ff5c5c;
  text-transform: uppercase;
  padding: 1rem 2.2rem;
  ${media.lg('min')`
    font-size: 1rem;
    padding: .8rem 1.7rem;
  `}
  ${media.sm('max')`
    font-size: 2rem;
    padding: 1.3rem 3.2rem;
  `}
`;
