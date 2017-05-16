import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.button`
  display: inline-block;
  margin-right: 2rem;
  font-size: 5rem;
  line-height: 7rem;
  font-family: "avenir";
  font-weight: 700;
  color: #ebebeb;
  text-transform: uppercase;

  ${media.sm('min')`
    font-size: 2.5rem;
    margin-right: 0.6rem;
    line-height: 2.5rem;
  `}

  ${props => props.isSize && `
    color: #ebebeb;
  `}

  ${props => props.isActive && `
    color: #4d42f8;
  `}
`;
