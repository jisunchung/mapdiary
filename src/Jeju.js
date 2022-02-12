import React from "react";
import './App.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import a from "./images/jeju/a.jpeg"
import c from "./images/jeju/b.jpeg"
import d from "./images/jeju/c.jpeg"
import e from "./images/jeju/d.jpeg"
import f from "./images/jeju/e.jpeg"
import g from "./images/jeju/f.jpeg"
import h from "./images/jeju/g.jpeg"
import i from "./images/jeju/h.jpeg"
import j from "./images/jeju/i.jpeg"
import b from "./images/jeju/j.jpeg"


function Jeju(){
    return(
        <div style={{backgroundColor:"#282c34",color:"white"}}>
            <Link className="home" style={{float:"right", padding:20}} to="/"><h1>← home</h1></Link>
            
    <Grid container spacing={1}>

      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={d} style={{float:"right",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={j} style={{float:"left",
              width:'300px', 
              height:'370px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={c} style={{float:"left",
              width:'300px', 
              height:'400px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={h} style={{float:"left",
              width:'270px', 
              height:'370px',}}/>
        </motion.div>
        </Box>
      </Grid>
     
      {/* <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          3
        </Box>
      </Grid> */}
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={e} style={{float:"right",
              width:'300px', 
              height:'220px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={f} style={{float:"left",
              width:'320px', 
              height:'250px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 2}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={g} style={{float:"right",
              width:'350px', 
              height:'250px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={a} style={{float:"left",
              width:'320px', 
              height:'250px',}}/>
        </motion.div>
        </Box>
      </Grid>

      <Grid item xs={6} sm={6}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={i} style={{float:"right",
              width:'500px', 
              height:'350px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={b} style={{float:"left",
              width:'400px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
      
    </Grid>
   
        </div>
            
       
       
       
    
    )
}

export default Jeju