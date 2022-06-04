import { Card } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "../../App"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
function Select() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    const token = localStorage.getItem("token")
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/info/", {
          headers: { Authorization: token },
        })
        setUser({
          username: response.data.username,
          id: response.data._id,
          email: response.data.email,
        })
      } catch (error) {}
    }
    getData()
  }, [])
  console.log(user)
  return (
    <Main>
      <Holder>
        <Card>Join as a Organizer</Card>
        <Card>Join as a User</Card>
      </Holder>
    </Main>
  )
}

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Holder = styled.div`
  background: white;
  display: flex;
`

export default Select
