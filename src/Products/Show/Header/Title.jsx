import styled from 'styled-components';
import media from '../../../styled/media';
import c from '../../../styled/config';

export default styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-family: ${c.fontBody.avenir};
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  color: ${c.colors.showTitle};
  text-transform: uppercase;
  ${media.sm('max')`
    margin-bottom: 1rem;
  `}
`;
