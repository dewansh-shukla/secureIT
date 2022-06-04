import { Card, Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../App"
import EventsCard from "../../components/Cards/EventsCard"

const CardsData = [
  { cardName: "xyz0", cardDescription: "abc0" },
  { cardName: "xyz1", cardDescription: "abc1" },
  { cardName: "xyz2", cardDescription: "abc2" },
  { cardName: "xyz3", cardDescription: "abc3" },
]

function Organize() {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <Main>
      <Container maxWidth='xl' sx={{ padding: 0, margin: 0 }}>
        <Grid
          container
          spacing={2}
          sx={{ background: "", height: `calc(100vh - 75px)` }}
        >
          {/* Space Holder */}
          <Grid item xl={1} sx={{ background: "" }} />

          {/* Events Card Holder */}
          <Grid item xl={7} sx={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ color: "white", marginBottom: "20px" }}>
                Events Organised By You
              </Typography>
              <div
                style={{
                  maxHeight: "70vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  overflowY: "auto",
                  width: "100%",
                  padding: "10px",
                  margin: "10px",
                }}
              ><div style={{marginBottom: "10px"}}></div>
                {CardsData.map((value, index) => (
                  <>
                  <EventsCard />
                  </>
                ))}
              </div>
            </div>
          </Grid>

          {/* Profile section Here */}
          <Grid item xl={3}>
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                    height: "100px",
                    width: "100px",
                    position: "absolute",
                  }}
                />
                <div
                  style={{
                    width: "80%",
                    height: "400px",
                    background: "white",
                    borderRadius: "30px",
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid yellow",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "3em",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "1em" }}>
                      Email:
                      <span style={{ fontWeight: 500 }}>{user?.email}</span>
                    </p>
                    <p style={{ fontWeight: 900, fontSize: "1em" }}>
                      @_:
                      <span style={{ fontWeight: 500 }}>{user?.username}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/* Space Holder */}
          <Grid item xl={1} sx={{ background: "" }} />
        </Grid>
      </Container>
    </Main>
  )
}

const Main = styled.div`
  height: calc(100vh - 75px);
  width: 100vw;
  display: flex;
  justify-content: center;
`
export default Organize
