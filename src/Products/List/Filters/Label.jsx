import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.span`
  display: inline-block;
  margin-right: 1.7rem;
  font-family: "avenir";
  font-size: 3rem;
  line-height: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
  ${media.sm('min')`
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-right: 2.2rem;
    ${media.md('max')`
      margin-right: 1.5rem;
      font-size: 2.2rem;
    `}
  `}
`;
