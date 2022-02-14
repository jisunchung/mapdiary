import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import "./App.css";
import a from "./images/yeo/a.jpeg";
import b from "./images/yeo/b.jpeg";
import c from "./images/yeo/c.jpeg";
import d from "./images/yeo/d.jpeg";
import e from "./images/yeo/e.jpeg";
import f from "./images/yeo/f.jpeg";
import g from "./images/yeo/g.jpeg";
import h from "./images/yeo/h.jpeg";
import i from "./images/yeo/i.jpeg";
import j from "./images/yeo/j.jpeg";
import k from "./images/yeo/k.jpeg";
import l from "./images/yeo/l.jpeg";
import n from "./images/yeo/n.jpeg";
import o from "./images/yeo/o.jpeg";
import p from "./images/yeo/p.jpeg";
import q from "./images/yeo/q.jpeg";
import r from "./images/yeo/r.jpeg";
import s from "./images/yeo/s.jpeg";
import t from "./images/yeo/t.jpeg";

const FontStyle = {
  fontSize: "100px",
  textAlign: "center",
  position: "fixed",
  bottom: "-100px",
  zIndex: 1,
  color: " #f9fbf8",
  left: "50%",
  transform: "translateX(-50%)",
  pointerEents: "none",
};

function Yeo() {
  return (
    <div style={{ backgroundColor: "#282c34", color: "white" }}>
      <Link className="home" style={{ float: "right", padding: 20 }} to="/">
        <h1>← home</h1>
      </Link>
      <h1 style={FontStyle}>YEOSU</h1>

      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="a"
                src={e}
                style={{ float: "right", width: "500px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="b"
                src={b}
                style={{ float: "left", width: "310px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        {/*  */}
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="c"
                src={c}
                style={{ float: "left", width: "350px", height: "250px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="d"
                src={d}
                style={{ float: "left", width: "350px", height: "250px" }}
              />
            </motion.div>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="e"
                src={a}
                style={{ float: "right", width: "650px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="g"
                src={g}
                style={{ float: "left", width: "350px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="h"
                src={h}
                style={{ float: "left", width: "300px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="i"
                src={i}
                style={{ float: "right", width: "360px", height: "250px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="j"
                src={j}
                style={{ float: "left", width: "320px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        {/*  */}
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="k"
                src={k}
                style={{ float: "left", width: "350px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="l"
                src={l}
                style={{ float: "left", width: "300px", height: "400px" }}
              />
            </motion.div>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="m"
                src={f}
                style={{ float: "right", width: "350px", height: "250px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="n"
                src={n}
                style={{ float: "left", width: "310px", height: "360px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        {/*  */}
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="o"
                src={o}
                style={{ float: "left", width: "350px", height: "300px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="p"
                src={p}
                style={{ float: "left", width: "300px", height: "370px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        {/*  */}

        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="q"
                src={q}
                style={{ float: "right", width: "350px", height: "350px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="r"
                src={s}
                style={{ float: "left", width: "320px", height: "320px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="s"
                src={r}
                style={{ float: "right", width: "600px", height: "450px" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box color="info.contrastText" p={2}>
            <motion.div whileHover={{ scale: 1.9 }} whileTap={{ scale: 0.9 }}>
              <img
                alt="t"
                src={t}
                style={{ float: "left", width: "600px", height: "500px" }}
              />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Yeo;
