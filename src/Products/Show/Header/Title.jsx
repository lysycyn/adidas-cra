import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-family: "avenir";
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
  text-transform: uppercase;
  ${media.sm('max')`
    margin-bottom: 1rem;
  `}
`;
