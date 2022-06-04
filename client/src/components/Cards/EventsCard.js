import { Card, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import Card1 from "./card1.webp";
import { BsShare } from "react-icons/bs";

function EventsCard({ info }) {
  console.log("Info ", info);
  return (
    <Card
      className="rounded-2xl rounded-bl-2xl"
      sx={{
        width: "100%",
        maxHeight: "300px",
        margin: "10px 0px 10px 0px",
        minHeight: "200px",
        background: "black",
        borderRadius: "30px",
      }}
    >
      <div className="bg-white rounded-br-2xl shadow-2xl flex w-100%">
        {/* Header Text */}
        <div className="w-3/5 p-4 text-center">
          <div className="mt-0 flex-col">
            <h2>
              <Typography
                variant="body"
                component="div"
                gutterBottom
                style={{
                  margin: 0,
                  padding: 0,
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "Roboto Mono, monospace",
                }}
              >
                @{info.eventName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  textAlign: "right",
                  fontFamily: `'Roboto Mono', monospace !important`,
                }}
              >
                Venue:{info.eventVenue}
              </Typography>
            </h2>
          </div>
          <p
            style={{ fontFamily: "Roboto Mono, monospace" }}
            className="text-black p-3"
          >
            {info.eventDescription}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontFamily: "Roboto Mono, monospace" }}>
              Start Time: {info.eventStartDate.slice(0, 19)}
            </p>
            <p style={{ fontFamily: "Roboto Mono, monospace" }}>
              End time: {info.eventEndDate.slice(0, 19)}
            </p>
          </div>
          <button className="sharebutton">
            <BsShare></BsShare>
          </button>
        </div>
        <div
          className="w-2/5 rounded-br-2xl py-36 px-8"
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
  );
}

export default EventsCard;
