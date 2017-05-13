import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import Nav from "./Nav"
import { Wrapper, HideMobile } from "./styled"

export default () => {
  return (
    <Wrapper>
      <Logo />
      <HideMobile>
        <Search />
        <Nav />
      </HideMobile>
    </Wrapper>
  )
}
