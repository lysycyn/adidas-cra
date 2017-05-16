import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.span`
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
