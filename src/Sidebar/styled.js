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
  ${media.xs("max")`
    padding-top: 0;
  `}
  ${media.xs("min")`
    min-height: 100vh;
  `}
  background: #000;
`

export const HideMobile = styled.div`
  ${media.xs("max")`
    display: none;
  `}
`
