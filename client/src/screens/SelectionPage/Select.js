import { Card } from "@mui/material"
import React from "react"
import styled from "styled-components"
function Select() {
  return (
    <Main>
      <Holder>
        <Card>Join as a Organizer</Card>
        <Card>Join as a User</Card>
      </Holder>
    </Main>
  )
}

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Holder = styled.div`
  background: white;
  display: flex;
`

export default Select
