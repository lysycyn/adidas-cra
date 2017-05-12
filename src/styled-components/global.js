import { injectGlobal } from "styled-components"
import { media } from "./media"

export default injectGlobal`
  html {
    box-sizing: border-box;
    ${media.lg("min")`
      font-size: 10px;
    `}
    ${media.lg("max")`
      font-size: 1em;
    `}
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  a,
  a:focus {
    text-decoration: none;
    color: #fff;
  }

  button {
    background: none;
    outline: none;
    border: none;
    padding: 0;
  }

  input:focus{
    outline: none;
  }
`
