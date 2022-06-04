import { Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App"
import JoinedEventCard from "../../components/Cards/JoinedEventCard"
import { BiRefresh } from "react-icons/bi"
function JoinedEvents() {
  const { user } = useContext(UserContext)
  console.log("User", user)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/getalljoinedevents/${user.id}`)
      .then((res) => setData(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/getalljoinedevents/${user.id}`)
      .then((res) => setData(res.data))
  }, [refresh])
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography>Events You've Joined </Typography>
        <button onClick={() => setRefresh(!refresh)}>
          <BiRefresh style={{ fontSize: "25px" }} />
        </button>
      </div>
      <div
        style={{
          maxHeight: "550px",
          minHeight: "550px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          width: "60%",
          padding: "20px",
          margin: "10px",
          border: "2px solid yellow",
          borderRadius: "30px",
          color: "white",
        }}
        className='xyz'
      >
        {data.length > 0 ? (
          <>
            {data.map((value, index) => {
              return <JoinedEventCard info={value} />
            })}
          </>
        ) : (
          <>
            <Typography>You have not joined any event</Typography>
          </>
        )}
      </div>
    </div>
  )
}

export default JoinedEvents
