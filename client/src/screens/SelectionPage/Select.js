import { Card } from "@mui/material"
import axios from "axios"
import React, { useEffect, useContext } from "react"
import { UserContext } from "../../App"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import card2 from "./card2.webp"
import card3 from "./card3.jpg"

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
      <Holder className='rounded-tr-2xl'>
        <Card sx={{ maxWidth: 400 }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              // display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // backgroundImage: `url(${card3})`,
              background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)), url(${card3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Organize an Event
              </Typography>
              <Typography variant='body2' color='text.primary'>
                We provide a platform to people, where everyone is free to
                organize an Event and invite people as they wish.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Organize</Button>
            </CardActions>
          </div>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              // display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)), url(${card2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Join an Event
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                This is a platform where people can join an Event and even dont
                have to worry about getting back as we'll be laways there to
                help.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Join</Button>
            </CardActions>
          </div>
        </Card>
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
  background: black;
  display: flex;
`

export default Select
