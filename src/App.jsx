import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import 'normalize.css';
import Sidebar from './Sidebar';
import Show from './Products/Show';
import List from './Products/List';
import media from './styled/media';
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
      <Switch>
        <Route path="/products/:group/:type" component={List} />
        <Route path="/products/:id" component={Show} />
        <Redirect from="/" to="/products/running/shoes" />
      </Switch>
    </Wrapper>
  </Router>
);
