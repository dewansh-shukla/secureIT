import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "./lib";
import Rick from "./rick.png";

const FlippyStyle = {
  width: "400px",
  height: "500px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center",
};

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
     <FrontSide
      style={{
        backgroundColor: "#41669d",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        alt="home"
        src={Rick}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      Organize an Event
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}

       
      </span>
    </FrontSide> 
    <BackSide
      style={{
        backgroundColor: "#175852",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>People are welcome to organize an event.</p>
      <a
              href='../signup'
              className='border-2 border-black rounded-full px-8 py-1 inline-block font-semibold hover:bg-black hover:text-yellow-400'
            >
              Sign Up
            </a>
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {children}
      
      </span>
    </BackSide>  
  </React.Fragment>
);

const FlippyOnHover = ({ flipDirection = "vertical" }) => (
  <Flippy flipOnHover={true} flipDirection={flipDirection} style={FlippyStyle}>
    
  </Flippy>
);

class SelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped,
      });
    }, 3000);
  }

  render() {
    return (
      <div className="SelectionPage">
        <div
          style={{
            display: "flex",
            flex: "1 0 100px",
            justifyContent: "space-around",
            "flex-wrap": "wrap",
          }}
        >
          <Flippy
            ref={(r) => (this.flippyHorizontal = r)}
            style={FlippyStyle}
          >
          </Flippy>
          <FlippyOnHover flipDirection="horizontal" />
          <Flippy
            ref={(r) => (this.flippyHorizontal = r)}
            style={FlippyStyle}
          >
            
          </Flippy>
          <FlippyOnHover flipDirection="horizontal" />
        </div>
      </div>
    );
  }
}

export default SelectionPage;
