import { TextField, Typography } from "@mui/material"
import React from "react"
import styled from "styled-components"
function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "1em",
            margin: "40px 0px 20px 0px",
          }}
        >
          Login and get Secure!!!
        </Typography>
        <form>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "30px",
            }}
          >
            <TextField
              id='outlined-basic'
              label='username'
              variant='outlined'
              sx={{ margin: "5px 0px 5px 0px", width: "100%" }}
            />
            <TextField
              id='outlined-basic'
              label='password'
              variant='outlined'
              sx={{ margin: "5px 0px 5px 0px", width: "100%" }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <SubmitBtn>Submit</SubmitBtn>
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
  margin-top: 50px;
  &:hover {
    opacity: 0.5;
  }
`
export default Login
