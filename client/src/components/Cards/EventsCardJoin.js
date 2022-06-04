import { Button, Card, Typography } from "@mui/material"
import React, { useState } from "react"
import axios from "axios"
import Card1 from "./card1.webp"
import UserAddModal from "../Modals/UserAddModal"
function EventsCardJoin({ info }) {
  // const handleSubmit = (id) => {
  //   const eventJoined = { ...info, eventCheckStatus: false }
  //   axios.post("http://localhost:4000/user/joinedevents", eventJoined)
  // }
  const [open, setOpen] = useState(false)
  return (
    <Card
      className='rounded-2xl rounded-bl-2xl'
      sx={{
        width: "100%",
        margin: "10px 0px 10px 0px",
        minHeight: "300px",
        background: "black",
        borderRadius: "30px",
      }}
    >
      <div className='bg-white rounded-br-2xl shadow-2xl flex w-100% justify-evenly '>
        {/* Header Text */}
        <div className='w-3/5 p-4 text-center'>
          <div className='mt-0 flex-col'>
            <h2>
              {/* {props.name} */}
              <Typography
                variant='body'
                component='div'
                gutterBottom
                style={{
                  margin: 0,
                  padding: 0,
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                @{info.eventName}
              </Typography>
              <Typography sx={{ fontSize: "15px", textAlign: "right" }}>
                Venue:{info.eventVenue}
              </Typography>
            </h2>
          </div>
          <p className='text-black p-3'>{info.eventDescription}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Start Time {info.eventStartDate}</p>
            <p>End time {info.eventEndDate}</p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                color: "yellow",
                background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                padding: "10px",
                color: "white",
                borderRadius: "30px",
                marginTop: "30px",
              }}
              onClick={() => setOpen(true)}
            >
              Join Event
              {/* <GrAddCircle style={{ fontSize: "15px"}} /> */}
            </Button>
          </div>
        </div>
        <UserAddModal open={open} setOpen={setOpen} info={info} />
        <div
          className='w-2/5 rounded-br-2xl py-36 px-8'
          style={{
            height: "100%",
            width: "50%",
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundImage: `url(${card3})`,
            background: `url(${Card1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </Card>
  )
}

export default EventsCardJoin
