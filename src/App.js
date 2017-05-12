import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Details from "./Details"
import List from "./List"
import "normalize.css"
import "./styled-components/global"

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <Route exact path="/" component={List} />
          <Route path="/item" component={Details} />
        </Wrapper>
      </Router>
    )
  }
}

export default App
