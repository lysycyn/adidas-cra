import React from "react"
import { Wrapper, Logo } from "./styled"

export default () => {
  return (
    <Wrapper>
      <Logo
        src={require("./filter.png")}
        srcSet={`
           ${require("./filter@2x.png")} 2x,
           ${require("./filter@3x.png")} 3x
        `}
        alt="фильтр"
      />
    </Wrapper>
  )
}
