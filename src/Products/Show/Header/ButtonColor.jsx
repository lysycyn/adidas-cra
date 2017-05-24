import styled from 'styled-components';
import media from '../../../styled/media';

export default styled.button`
  display: inline-block;
  margin-right: 1.2rem;
  font-size: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;
  ${media.lg('min')`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: .9rem;
  `}
  background: ${props => props.color};
`;
