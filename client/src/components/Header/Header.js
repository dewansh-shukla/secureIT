import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Tab,
  Tabs,
  Button,
  Typography,
} from "@mui/material";
function Header() {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#000" }}>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Tabs sx={{}} indicatorColor="secondary" textColor="inherit">
              <Tab label="Products" />
              <Tab label="Services" />
              <Tab label="About Us" />
              <Tab label="Contact" />
            </Tabs>
            <Button
              sx={{ background: "#FFD600", color: "#000" }}
              variant="outlined"
            >
              Login
            </Button>
            <Button
              sx={{ marginLeft: "10px", background: "#FFD600", color: "#000" }}
              variant="contained"
            >
              SignUp
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
