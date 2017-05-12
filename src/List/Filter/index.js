import React from "react"
import Logo from "./Logo"
import { Grid, Row } from "react-flexboxgrid"
import { Wrapper } from "./styled"

export default () => {
  return (
    <Wrapper className="filter">
      <Grid fluid>
        <Row>
          <Logo />
        </Row>
      </Grid>
    </Wrapper>
  )
}
