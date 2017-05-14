import styled from 'styled-components';
import media from '../styled-components/media';

export const Wrapper = styled.section`
  padding: 1.1rem 0;
  ${media.lg('min')`
    padding: 1.1rem 0;
  `}
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1.7rem;
  background-color: #ebebeb;
  height: 0.5rem;
  border: none;
  outline: none;
`;
