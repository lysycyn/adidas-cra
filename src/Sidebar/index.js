import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import Nav from "./Nav"
import { Wrapper } from "./styled"

export default () => {
  return (
    <Wrapper>
      <Logo />
      <Search />
      <Nav />
    </Wrapper>
  )
}
