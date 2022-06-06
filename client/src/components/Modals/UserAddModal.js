import { Box, Modal, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import axios from "axios"

function UserJoinModal({ open, setOpen, info }) {
  const [contact, setContact] = useState({
    contact1: "",
    contact2: "",
    contact3: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const eventJoined = {
      ...info,
      eventCheckStatus: false,
      contact1: contact.contact1,
      contact2: contact.contact2,
      contact3: contact.contact3,
    }
    axios.post("http://localhost:4000/user/joinedevents", eventJoined)
  }
  const handleClose = () => {
    setOpen(false)
  }
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
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          background: "white",
          borderRadius: "30px",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", marginTop: "20px", fontWeight: 900 }}
        >
          Please enter your three Contacts
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "15px", marginTop: "30px" }}
            >
              Please enter your close contacts
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TextField
                variant='outlined'
                label='contact 1'
                value={contact.contact1}
                onChange={(e) =>
                  setContact({ ...contact, contact1: e.target.value })
                }
                sx={{ margin: "5px" }}
              />
              <TextField
                variant='outlined'
                label='contact 2'
                sx={{ margin: "5px" }}
                value={contact.contact2}
                onChange={(e) =>
                  setContact({ ...contact, contact2: e.target.value })
                }
              />
              <TextField
                variant='outlined'
                label='contact 3'
                sx={{ margin: "5px" }}
                value={contact.contact3}
                onChange={(e) =>
                  setContact({ ...contact, contact3: e.target.value })
                }
              />
            </div>
          </div>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <button
              type='submit'
              style={{
                margin: "10px",
                background: "yellow",
                color: "black",
                padding: "5px 10px 5px 10px",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}

export default UserJoinModal
