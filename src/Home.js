import React from "react";
import map from "./images/mapb.png";
import seoul from "./images/seoul.png";
import inc from "./images/inc.png";
import mok from "./images/mok.png";
import yeo from "./images/yeo.png";
import busan from "./images/bu.png";
import jeju from "./images/jeju.png";
import face from "./images/face2.jpeg";
import "./App.css";
import { Grid, Box, Hidden } from "@material-ui/core";
import { MdMailOutline } from "react-icons/md";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
          <Grid style={{ backgroundColor: "rgb(132,185,193)" }} item xs={12}>
            <div style={{ padding: 10 }}>
              <img
                alt="face"
                src={face}
                style={{
                  float: "left",
                  borderRadius: "70%",
                  width: "80px",
                  height: "80px",
                  overflow: Hidden,
                }}
              />
            </div>
            <p style={{ float: "left", padding: 10 }}>Map diary</p>
            <Link to="/mail">
              <MdMailOutline style={{ float: "right", padding: 30 }} />
            </Link>
            <div className="example-container">
              {/* <motion.div
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:'left', 
              borderRadius: '30px',width:'80px', 
              height:'80px',overflow:Hidden}}/>
        </motion.div>  */}
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box p={2}>
              <img
                alt="map"
                src={map}
                style={{ width: "550px", height: "600px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box p={1}>
              <Link to="/seoul">
                <button>
                  <img alt="se" src={seoul} />
                </button>
              </Link>
              <p>??????</p>

              <Link to="/incheon">
                <button>
                  <img alt="inc" src={inc} />
                </button>
              </Link>
              <p>??????</p>
              <Link to="/mokpo">
                <button>
                  <img alt="mok" src={mok} />
                </button>
              </Link>
              <p> ??????</p>
              <Link to="/yeosu">
                <button>
                  <img alt="yeosu" src={yeo} />
                </button>
              </Link>
              <p>??????</p>
              <Link to="/busan">
                <button>
                  <img alt="busan" src={busan} />
                </button>
              </Link>
              <p>??????</p>
              <Link to="/jeju">
                <button>
                  <img alt="jeju" src={jeju} />
                </button>
              </Link>
              <p>?????????</p>
            </Box>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default Home;
