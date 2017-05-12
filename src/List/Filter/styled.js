import styled from "styled-components"
import { media } from "../../styled-components/media"

export const Wrapper = styled.section`
  flex-basis: 100%;
`

export const Button = styled.button`
  display: inline-block;
  margin-right: 1.2rem;
  font-family: "avenir";
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.3rem;
  color: #ebebeb;
  text-transform: uppercase;

  ${props => props.isSize && `
    font-size: 24px;
    margin-right: 1.25rem;
    color: #ebebeb;
  `}

  ${props => props.isActive && `
    color: #4d42f8;
  `}
`

export const Title = styled.span`
  display: inline-block;
  margin-right: 1.417rem;
  font-family: "avenir";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
`
