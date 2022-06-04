import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "./landing2.png";

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
      <Grid container sx={{ width: "100vw", height: `calc(100vh - 75px)` }}>
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
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
                  "While you are enjoying",
                  "your moment,",
                  "we are gonna help in need.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
        <Grid item xl={6} sx={{ display: "inline", justifyContent: "center" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Image})`,
              // backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <img
            alt="img"
            src={Image}
            style={{ width: "1200px",height:'800px' }}
          ></img> */}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
