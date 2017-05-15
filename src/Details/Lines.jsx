import styled from 'styled-components';
import media from '../styled-components/media';

export default styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background: #e7e7e7;
  border-radius: 1px;

  &:after,
  &:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    left: 0;
    background: #e7e7e7;
    border-radius: 1px;
  }
  &:before {
    top: -5px;
  }
  &:after {
    bottom: -5px;
  }

  ${media.sm('max')`
    display: none;
  `}
`;
