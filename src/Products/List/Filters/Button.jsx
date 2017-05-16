import styled from 'styled-components';
import media from '../../../styled-components/media';

export default styled.button`
  display: inline-block;
  margin-right: 2rem;
  font-size: 3rem;
  line-height: 5rem;
  font-family: "avenir";
  font-weight: 700;
  color: #ebebeb;
  text-transform: uppercase;
  ${props => props.isSize && `
    margin-right: 1rem;
  `}

  ${media.sm('min')`
    font-size: 2.4rem;
    margin-right: 1.8rem;
    line-height: 2.5rem;
    ${props => props.isSize && `
      margin-right: .7rem;
    `}
    ${media.md('max')`
      margin-right: 1.5rem;
      font-size: 2.2rem;
      ${props => props.isSize && `
        margin-right: .6rem;
      `}
    `}
  `}

  &:last-child{
    margin-right: 0;
  }
  ${props => props.isActive && `
    color: #4d42f8;
  `}
`;
