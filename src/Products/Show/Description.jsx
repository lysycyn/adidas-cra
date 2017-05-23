import styled from 'styled-components';
import c from '../../styled/config';

export default styled.p`
  margin-bottom: 15rem;
  font-family: ${c.fontBody.avenir};
  font-weight: 400;
  font-size: 4rem;
  line-height: 5rem;
  color: ${c.colors.contentLightGrey};

  & b {
    color: ${c.colors.contentDarkGrey};
    font-weight: 400;
  }
`;
