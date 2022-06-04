import { Grid } from "@mui/material"
import axios from "axios"
import React, { useEffect } from "react"

function AllEvents() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/organizer/getallevents")
      .then((res) => console.log("All events", res.data))
  }, [])
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid container sx={{ width: "100%" }}></Grid>
    </div>
  )
}

export default AllEvents
