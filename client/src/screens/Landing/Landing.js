import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./landing.png";

function Landing() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container sx={{ width: "80%" }}>
        <Grid item xl={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontWeight: 700,
              fontSize: "50px",
              letterSpacing: "2px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "While you are enjoying your life,",
                  "we are gonna help in need.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xl={8} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            alt="img"
            src={Image}
            style={{ width: "140vh", height: "80vh" }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
