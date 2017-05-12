import React from "react"
import Filter from "./Filter"
import Cards from "./Cards"
import { Wrapper } from "./styled"

export default () => {
  return (
    <Wrapper>
      <Filter />
      <Cards />
    </Wrapper>
  )
}
