import { TextField, Typography } from "@mui/material"
import React from "react"
import styled from "styled-components"
function SignUp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "350px",
          height: "500px",
          background: "white",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          border: "2px solid yellow",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            margin: "40px 0px 20px 0px",
            color: "black",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Signup and get Started !!!
        </Typography>
        <form>
          <div
            style={{
              display: "flex",
              height: "300px",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TextField
              id='outlined-basic'
              label='username'
              variant='outlined'
              sx={{ margin: "5px 0px 5px 0px", width: "80%" }}
            />
            <TextField
              id='outlined-basic'
              label='email'
              variant='outlined'
              sx={{ margin: "5px 0px 5px 0px", width: "80%" }}
            />
            <TextField
              id='outlined-basic'
              label='password'
              variant='outlined'
              sx={{ margin: "5px 0px 5px 0px", width: "80%" }}
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <SubmitBtn>submit</SubmitBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const SubmitBtn = styled.button`
  background-color: yellow;
  border-radius: 30px;
  padding: 5px 20px 5px 20px;
  border: 1px solid gray;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    opacity: 0.5;
  }
`

export default SignUp
