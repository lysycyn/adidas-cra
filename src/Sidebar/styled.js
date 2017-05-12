import styled from "styled-components"
import { media } from "../styled-components/media"

export const Wrapper = styled.aside`
  padding: 0 1.83rem;
  padding-top: 2.59rem;
  ${media.lg("min")`
    flex: 1 0 41.4rem;
  `}
  ${media.lg("max")`
    flex: 1 0 34.5%;
  `}
  min-height: 100vh;
  background: #000;
`
