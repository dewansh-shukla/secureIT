import { Card, Container, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "../../App"
import EventsCard from "../../components/Cards/EventsCard"
import { BiAddToQueue, BiRefresh } from "react-icons/bi"
import EventsCardJoin from "../../components/Cards/EventsCardJoin"
import "./style.css"

const CardsData = [
  { cardName: "xyz0", cardDescription: "abc0" },
  { cardName: "xyz1", cardDescription: "abc1" },
  { cardName: "xyz2", cardDescription: "abc2" },
  { cardName: "xyz3", cardDescription: "abc3" },
]

function User() {
  const { user } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    axios
    .get("http://localhost:4000/organizer/getallevents")
    .then((res) => setData(res.data))
}, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4000/organizer/getallevents`)
      .then((res) => setData(res.data))
  }, [refresh])

  return (
    <Main>
      <Container maxWidth='xl' sx={{ padding: 0, margin: 0 }}>
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
                  data.map((value, index) => <EventsCardJoin info={value} />)
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
export default User
