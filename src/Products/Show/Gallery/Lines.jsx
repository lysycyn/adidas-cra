import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: .2rem;
  background: #e7e7e7;
  border-radius: .1rem;

  &:after,
  &:before {
    position: absolute;
    content: "";
    height: .2rem;
    width: 100%;
    left: 0;
    background: #e7e7e7;
    border-radius: .1rem;
  }
  &:before {
    top: -.5rem;
  }
  &:after {
    bottom: -.5rem;
  }

  ${media.sm('max')`
    display: none;
  `}
`;
