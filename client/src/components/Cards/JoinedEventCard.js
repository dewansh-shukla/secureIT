import { Button, Card, Snackbar, Typography } from "@mui/material"
import React, { useState } from "react"
import Card1 from "./card1.webp"
function JoinedEventCard({ info }) {
  const [checkedIn, setCheckedIn] = useState(false)
  const [reminder, setReminder] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setReminder(false)
  }

  const handleCheckIn = () => {
    setCheckedIn(!checkedIn)
    var count = 0
    const messageTime = 10000
    if (checkedIn) {
      const interval = setInterval(() => {
        console.log("interval in every 10 sec")
        count = count + 1
        setTimeout(() => {
          setReminder(true)
        }, messageTime)
        if (count === 2) {
          clearInterval(interval)
        }
        messageTime = messageTime + 5000
      }, 30000)
    } else {
      setReminder(false)
    }
  }

  return (
    <Card
      className='rounded-2xl rounded-bl-2xl'
      sx={{
        width: "100%",

        margin: "10px 0px 10px 0px",
        minHeight: "250px",
        background: "black",
        borderRadius: "30px",
      }}
    >
      <div className='bg-white rounded-br-2xl shadow-2xl flex w-100%'>
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
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                Venue:
                <Typography sx={{ fontWeight: 300, fontSize: "15px" }}>
                  {info.eventVenue}
                </Typography>
              </Typography>
            </h2>
          </div>
          <p
            className='text-black p-3'
            style={{ fontFamily: `Roboto Mono,monospace `, fontWeight: 700 }}
          >
            {info.eventDescription}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "15px",
              fontWeight: 900,
            }}
          >
            <p>
              Start Time:-
              <span style={{ fontWeight: 600 }}>
                {info.eventStartDate.slice(0, 10)}
                &nbsp;&nbsp;&nbsp;
                {info.eventStartDate.slice(11, 16)}
              </span>
            </p>
            <p>
              End time:-
              <span style={{ fontWeight: 600 }}>
                {info.eventEndDate.slice(0, 10)}
                &nbsp;&nbsp;&nbsp;
                {info.eventEndDate.slice(11, 16)}
              </span>
            </p>
          </div>
          {checkedIn ? (
            <>
              <Button
                sx={{
                  color: "white",
                  background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                  borderRadius: "30px",
                  padding: "8px",
                  fontSize: "15px",
                  fontWeight: 700,
                  margin: "20px",
                }}
                onClick={() => handleCheckIn()}
              >
                CheckOut
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{
                  color: "white",
                  background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                  borderRadius: "30px",
                  padding: "8px",
                  fontSize: "15px",
                  fontWeight: 700,
                  margin: "20px",
                }}
                onClick={() => handleCheckIn()}
              >
                CheckIn
              </Button>
            </>
          )}
        </div>
        <Snackbar
          open={reminder}
          autoHideDuration={3000}
          onClose={handleClose}
          message={` Sos to Contacts ${info.contact1} and ${info.contact2}`}
        />
        <div
          className='w-2/5 rounded-br-2xl py-36 px-8'
          style={{
            height: "100%",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)), url(${Card1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Card>
  )
}

export default JoinedEventCard
