import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.h2`
  margin: 0;
  margin-top: -18rem;
  font-family: "avenir";
  font-weight: 700;
  font-size: 10rem;
  ${media.sm('min')`
    margin-top: -4rem;
  `}
  color: #e2e2e2;
  &:after{
    content: "$";
  }
`;
