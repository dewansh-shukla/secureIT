import React, { useState, useContext } from "react"
import { Box, Modal, Typography, TextField, Button } from "@mui/material"
import DateTimePicker from "react-datetime-picker"
import { GiCrossedBones } from "react-icons/gi"
import { UserContext } from "../../App"
import axios from "axios"

function AddEventsModal({ open, setOpen }) {
  const { user } = useContext(UserContext)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  console.log(user)
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    eventVenue: "",
    eventDescription: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const event = {
      user_id: user.id,
      eventName: eventInfo.eventName,
      eventVenue: eventInfo.eventVenue,
      eventDescription: eventInfo.eventDescription,
      eventStartTime: startTime.toString(),
      eventEndTime: endTime.toString(),
    }
    axios({
      method: "POST",
      url: "http://localhost:4000/organizer/addevents",
      data: event,
    }).then(() => console.log("Event Added"))
  }
  console.log("Start Time", startTime)
  console.log("End time", endTime)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Content Div Starts Here */}
        <Box
          sx={{
            width: "100%",
            background: "white",
            color: "black",
            minHeight: "50%",
          }}
        >
          <button
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              fontWeight: 900,
            }}
            onClick={() => setOpen(false)}
          >
            <GiCrossedBones style={{ margin: "10px 20px 0px 0px " }} />
          </button>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "10px",
              fontWeight: 900,
              fontSize: "20px",
            }}
          >
            Create Event
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "5px" }}>
              {/* Event Name and Details */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <TextField
                  variant='outlined'
                  label='Event Name'
                  sx={{ margin: "10px" }}
                  value={eventInfo.eventName}
                  onChange={(e) => {
                    setEventInfo({ ...eventInfo, eventName: e.target.value })
                  }}
                />
                <TextField
                  variant='outlined'
                  label='Venue'
                  sx={{ margin: "10px" }}
                  value={eventInfo.eventVenue}
                  onChange={(e) => {
                    setEventInfo({ ...eventInfo, eventVenue: e.target.value })
                  }}
                />
              </div>

              {/* Description */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  id='outlined-multiline-static'
                  label='Description'
                  multiline
                  rows={4}
                  defaultValue='Enter Here'
                  sx={{ width: "80% !important" }}
                  value={eventInfo.eventDescription}
                  onChange={(e) => {
                    setEventInfo({
                      ...eventInfo,
                      eventDescription: e.target.value,
                    })
                  }}
                />
              </div>

              {/* Date and time Picker  */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", margin: "10px" }}>
                  <Typography sx={{ marginRight: "10px" }}>
                    Start Time
                  </Typography>
                  <DateTimePicker onChange={setStartTime} value={startTime} />
                </div>
                <div style={{ display: "flex", margin: "10px" }}>
                  <Typography sx={{ marginRight: "10px" }}>End Time</Typography>
                  <DateTimePicker onChange={setEndTime} value={endTime} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    padding: "10px",
                    marginBottom: "20px",
                    background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                    color: "white",
                    borderRadius: "30px",
                  }}
                  type='submit'
                  value='Submit'
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Box>
    </Modal>
  )
}

export default AddEventsModal
