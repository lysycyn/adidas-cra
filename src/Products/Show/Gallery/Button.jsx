import React from 'react';
import styled from 'styled-components';
import media from '../../../styled-components/media';

const Wrapper = styled.div`
  font-family: "avenir";
  font-size: 1.75rem;
  text-align: left;
  color: #c0c0c0;
  ${media.sm('max')`
    display: none;
  `}
`;

export default () => (
  <Wrapper>
    See<br />
    More<br />
    Photos
  </Wrapper>
);
