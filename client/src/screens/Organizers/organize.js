import { Card, Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "../../App"
import EventsCard from "../../components/Cards/EventsCard"
import { BiAddToQueue, BiRefresh } from "react-icons/bi"
import AddEventsModal from "../../components/Modals/AddEventsModal"
import "./style.css"
const CardsData = [
  { cardName: "xyz0", cardDescription: "abc0" },
  { cardName: "xyz1", cardDescription: "abc1" },
  { cardName: "xyz2", cardDescription: "abc2" },
  { cardName: "xyz3", cardDescription: "abc3" },
]

function Organize() {
  const { user } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:4000/organizer/getmyevents/${user.id}`)
      .then((res) => setData(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4000/organizer/getmyevents/${user.id}`)
      .then((res) => setData(res.data))
  }, [refresh])
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "25px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    marginBottom: "20px",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  Events Organised By You
                </Typography>
                <button
                  style={{ color: "white", marginLeft: "10px" }}
                  onClick={() => setRefresh(!refresh)}
                >
                  <BiRefresh />
                </button>
              </div>
              <div
                style={{
                  maxHeight: "550px",
                  minHeight: "550px",
                  display: "flex",
                  flexDirection: "column",
                  overflowY: "auto",
                  width: "100%",
                  padding: "20px",
                  margin: "10px",
                  border: "2px solid yellow",
                  borderRadius: "30px",
                }}
                className='xyz'
              >
                {data.length > 0 ? (
                  data.map((value, index) => <EventsCard info={value} />)
                ) : (
                  <>
                    <Typography variant='body' sx={{ color: "white" }}>
                      No Events
                    </Typography>
                  </>
                )}
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
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "18px",
                      }}
                      onClick={() => {
                        setOpen(true)
                      }}
                    >
                      Add New Event{" "}
                      <BiAddToQueue style={{ fontSize: "15px" }} />
                    </button>
                    <p style={{ fontWeight: 900, fontSize: "1em" }}>
                      Email:
                      <span style={{ fontWeight: 500 }}> {user?.email}</span>
                    </p>
                    <p style={{ fontWeight: 900, fontSize: "1em" }}>
                      @_:
                      <span style={{ fontWeight: 500 }}> {user?.username}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <AddEventsModal
            open={open}
            setOpen={setOpen}
            setRefresh={setRefresh}
          />
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
