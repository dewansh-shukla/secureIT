import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Card1 from "./card1.webp";
// import { GrAddCircle } from "react-icons/gr";

function EventsCardJoin(props) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      className="rounded-2xl rounded-bl-2xl"
      sx={{
        width: "90%",
        margin: "10px 0px 10px 0px",
        minHeight: "200px",
        background: "black",
      }}
    >
      <div className="bg-white rounded-br-2xl shadow-2xl flex w-100%">
        {/* Header Text */}
        <div className="w-3/5 p-4 text-center">
          <div className="py-5 mt-0">
            <h2>
              {/* {props.name} */}
              <Typography variant="h4" component="div" gutterBottom>
                Hello
              </Typography>
            </h2>
          </div>
          <p className="text-black p-3">or use your email account</p>
          <button
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "15px",
          color: "yellow",
          justifyContent: "center",
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        Join Event 
        {/* <GrAddCircle style={{ fontSize: "15px"}} /> */}
      </button>

          <div className="flex flex-col items-center"></div>
        </div>
        <div
          className="w-2/5 rounded-br-2xl py-36 px-8"
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
  );
}

export default EventsCardJoin;
