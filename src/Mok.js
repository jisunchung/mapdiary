import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import './App.css';
import a from "./images/mok/a.jpeg"
import b from "./images/mok/b.jpeg"
import c from "./images/mok/c.jpeg"
import d from "./images/mok/d.jpeg"
import e from "./images/mok/e.jpeg"
import f from "./images/mok/f.jpeg"
import g from "./images/mok/g.jpeg"
import h from "./images/mok/h.jpeg"
import i from "./images/mok/i.jpeg"
import j from "./images/mok/j.jpeg"
import k from "./images/mok/k.jpeg"
import l from "./images/mok/l.jpeg"
import m from "./images/mok/m.jpeg"
import n from "./images/mok/n.jpeg"
import o from "./images/mok/o.jpeg"
import p from "./images/mok/p.jpeg"
import q from "./images/mok/q.jpeg"
import r from "./images/mok/r.jpeg"
import s from "./images/mok/s.jpeg"
import t from "./images/mok/t.jpeg"



function Mok(){
    return(
        <div style={{backgroundColor:"#282c34",color:"white"}}>
            <Link className="home" style={{float:"right", padding:20}} to="/"><h1>← home</h1></Link>
            
            
            <Grid container spacing={1}>
        <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
            <img alt='a' src={t} style={{float:"right",
              width:'320px', 
              height:'280px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='b' src={b} style={{float:"left",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='c' src={d} style={{float:"left",
              width:'350px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='d' src={c} style={{float:"left",
              width:'300px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
     
      {/*  */}
     
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='e' src={e} style={{float:"right",
              width:'320px', 
              height:'220px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='f' src={f} style={{float:"left",
              width:'350px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='g' src={g} style={{float:"left",
              width:'350px', 
              height:'250px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='h' src={h} style={{float:"left",
              width:'300px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
      {/*  */}

      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='i' src={i} style={{float:"right",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
        whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='j' src={j} style={{float:"left",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='k' src={k} style={{float:"left",
              width:'350px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='l' src={l} style={{float:"left",
              width:'300px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
      {/*  */}

      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='m' src={o} style={{float:"right",
              width:'310px', 
              height:'320px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='n' src={q} style={{float:"left",
              width:'350px', 
              height:'250px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='o' src={r} style={{float:"left",
              width:'350px', 
              height:'350px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='p' src={p} style={{float:"left",
              width:'300px', 
              height:'250px',}}/>
        </motion.div>
        </Box>
      </Grid>
      {/*  */}

      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='q' src={n} style={{float:"right",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='r' src={m} style={{float:"left",
              width:'350px', 
              height:'250px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='s' src={s} style={{float:"left",
              width:'350px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
            whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='t' src={a} style={{float:"left",
              width:'300px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
      
    </Grid>
   
        </div>
           
    )
}

export default Mok