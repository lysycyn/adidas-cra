import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "../../styled-components/media"

export const Nav = styled.nav`
  text-align: center;
`

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-bottom: 2.42rem;
  text-transform: uppercase;
  font-family: "avenir";
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.3rem;
  transition: .6s;
  color: #3a3a3a;
  ${props => props.isActive && `color: #ffffff`}
  $:hover{
    color: #fff;
  }

  ${props => props.isSubNav && `
    padding-right: 2.75rem;

    &:after {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      right: 0;
      height: 2.75rem;
      width: 2.75rem;
      background: url(${require("./icon-arrow.svg")}) center no-repeat;
    }
  `}
`

export const SubNav = styled.nav`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 2.25rem;
  display: flex;
  flex-direction: column;
`

export const SubNavLink = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 2.168rem;
  text-transform: uppercase;
  font-family: "andale";
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.7rem;
  color: #3a3a3a;
  ${props => props.isActive && `color: #ffffff`}
`
