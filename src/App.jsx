import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'normalize.css';
import Sidebar from './Sidebar';
import Details from './Details';
import List from './List';
import media from './styled-components/media';
import './styles.css';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  ${media.sm('max')`
    flex-direction: column;
  `}
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/item" component={Details} />
    </Wrapper>
  </Router>
);
