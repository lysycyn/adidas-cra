import styled from 'styled-components';
import c from '../../../styled/config';

export default styled.h2`
  margin: 0;
  font-family: ${c.fontBody.avenir};
  font-weight: 700;
  font-size: 10rem;
  color: ${props => props.color || '#e2e2e2'};
  &:after{
    content: "$";
  }
`;
