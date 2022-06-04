import { Card, Typography } from "@mui/material";
import React from "react";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import Card1 from "./card1.webp";

function EventsCard(props) {
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
      <div className="bg-neutral-500 rounded-br-2xl shadow-2xl flex w-100%">
        {/* Header Text */}
        <div className="w-3/5 p-4 text-center">
          <div className="py-5 mt-0">
            <h2 >
              {/* {props.name} */}
              <Typography variant="h4" component="div" gutterBottom>Hello</Typography>
              
            </h2>
          </div>
          <p className="text-black p-3">or use your email account</p>

          <div className="flex flex-col items-center"></div>
        </div>
        {/* <div className="w-50% bg-yellow-400 text-black rounded-tr-2xl rounded-br-2xl py-36 px-12"> */}
        <div
          className="w-2/5 rounded-br-2xl py-36 px-8"
          style={{
            height: "100%",
            width: "50%",
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundImage: `url(${card3})`,
            background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.3)), url(${Card1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </Card>
  );
}

export default EventsCard;
