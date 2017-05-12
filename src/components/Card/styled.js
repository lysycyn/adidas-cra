import { Link } from "react-router-dom"
import styled from "styled-components"
import { media } from "../../styled-components/media"

export const Wrapper = styled.div`
  position: relative;
  padding: .6rem;
  font-size: 0;
  background: #ebebeb;
  margin-bottom: 2.084rem;
`

export const Image = styled.img`
  width: 100%;
  min-height: 16.416%;
  object-fit: contain;
`

export const BuyBtn = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 0.667rem;
  padding: 2.251rem;
  text-align: center;
  font-family: "avenir";
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(107deg, #0c09bf, #966dd8);
`
