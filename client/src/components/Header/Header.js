import React from "react"
import { AppBar, Box, Toolbar, Tab, Tabs, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
function Header() {
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "#000",
          height: "80px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              fontWeight: 900,
              fontSize: "30px",
              letterSpacing: "3px",
              cursor: "pointer",
            }}
          >
            Secure
            <Typography sx={{ color: "yellow", fontWeight: "bold" }}>
              IT
            </Typography>
          </Typography>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Tabs indicatorColor='secondary' textColor='inherit'>
              <Tab label='Home' />
              <Tab label='Home' />
              <Tab label='Home' />
            </Tabs>
            <Btn onClick={() => navigate("/login")}>Login</Btn>
            <Btn onClick={() => navigate("/signup")}>SignUp</Btn>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
const Btn = styled.button`
  color: black;
  font-weight: 700;
  background: rgba(255, 214, 0, 1);
  padding: 2px 25px 2px 25px;
  border-radius: 30px;
  margin: 0px 5px 0px 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export default Header
