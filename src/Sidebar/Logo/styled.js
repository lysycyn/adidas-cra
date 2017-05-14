import styled from 'styled-components';
import media from '../../styled-components/media';

export default styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 1.75rem;
  width: 7.8rem;
  height: 7.8rem;
  ${media.sm('max')`
    width: 8rem;
    height: 8rem;
  `}
  ${media.sm('max')`
    margin: 0;
  `}
  object-fit: contain;
`;
