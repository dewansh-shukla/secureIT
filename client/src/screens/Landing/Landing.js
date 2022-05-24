import { Box, Grid } from "@mui/material"
import React from "react"

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
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          xyz
        </Grid>
        <Grid item xl={6} sx={{ display: "flex", justifyContent: "center" }}>
          xyz
        </Grid>
      </Grid>
    </Box>
  )
}

export default Landing
