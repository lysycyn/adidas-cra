import React from "react"
import Logo from "./Logo"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Wrapper, Title, Button } from "./styled"

export default () => {
  return (
    <Wrapper>
      <Grid fluid>
        <Row middle="xs">
          <Col md={1}>
            <Logo />
          </Col>
          <Col xs={12} md={3}>
            <Button isActive>Man</Button>
            <Button>Women</Button>
          </Col>
          <Col xs={12} md={8}>
            <Title>Size</Title>
            <Button isSize>36</Button>
            <Button isSize>37</Button>
            <Button isSize>38</Button>
            <Button isSize>39</Button>
            <Button isSize isActive>40</Button>
            <Button isSize>41</Button>
            <Button isSize>42</Button>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
