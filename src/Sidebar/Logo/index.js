import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "./styled"

export default () => {
  return (
    <Link to="#">
      <Logo
        src={`${require("./logo.png")}`}
        srcSet={`
         ${require("./logo@2x.png")} 2x,
         ${require("./logo@3x.png")} 3x
      `}
      />
    </Link>
  )
}
