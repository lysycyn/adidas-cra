import styled from 'styled-components';
import media from '../styled-components/media';

export default styled.span`
  display: inline-block;
  font-family: "avenir";
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  background: #ff5c5c;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  ${media.lg('min')`
    font-size: 1.4rem;
  `}
`;
