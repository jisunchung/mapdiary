import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import './App.css';
import a from "./images/incheon/1.jpeg"
import b from "./images/incheon/2.jpeg"
import c from "./images/incheon/3.jpeg"
import d from "./images/incheon/4.jpeg"

const FontStyle = {
  fontSize: '100px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '-100px',
  zIndex: 1,
  color:' #f9fbf8',
  left: '50%',
  transform: 'translateX(-50%)',
  pointerEents: 'none',
}

function Inc(){
    return(
        <div style={{backgroundColor:"#282c34",color:"white"}}>
            <Link className="home" style={{float:"right", padding:20}} to="/"><h1>← home</h1></Link>
            <h1 style={FontStyle}>INCHEON</h1>
            
    <Grid container spacing={1}>

      
      <Grid item xs={6} sm={6}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.3}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={c} style={{float:"right",
              width:'350px', 
              height:'390px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
        <img alt='face' src={a} style={{float:"left",
              width:'350px', 
              height:'400px',}}/>
              </motion.div>
        </Box>
      </Grid>
     

      <Grid item xs={6} sm={6}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={b} style={{float:"right",
              width:'500px', 
              height:'300px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.12}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={d} style={{float:"left",
              width:'500px', 
              height:'400px',}}/>
        </motion.div>
        </Box>
      </Grid>
      
    </Grid>
   
        </div>
            
       
       
       
    
    )
}

export default Inc