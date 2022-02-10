import React from "react";
import face from './images/face2.jpeg';
import { motion } from "framer-motion";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

const TemplateBlock = styled.div`
width: 1000px;
position: relative; 
background:white;



margin: 0 auto;

margin-top: 30px;
margin-bottom: 32px;
display: flex;
flex-direction: column;`

function randomNum(min, max){
     var randNum = Math.floor(Math.random()*(max-min+1)) + min; 
     return randNum;
}

function ShowPhoto(){
    return(
        <div style={{backgroundColor:"#282c34",color:"white"}}>
            <Link to="/">home</Link>
            
    <Grid container spacing={1}>

      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"right",
              width:'310px', 
              height:'200px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'310px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'350px', 
              height:'300px',}}/>
        </motion.div> 
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.9}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'200px', 
              height:'300px',}}/>
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
      <img alt='face' src={face} style={{float:"right",
              width:'300px', 
              height:'220px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'320px', 
              height:'250px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 2}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"right",
              width:'320px', 
              height:'220px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'300px', 
              height:'150px',}}/>
        </motion.div>
        </Box>
      </Grid>

      <Grid item xs={6} sm={6}>
        <Box  color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"right",
              width:'500px', 
              height:'150px',}}/>
        </motion.div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box color="info.contrastText" p={2}>
        <motion.div 
whileHover={{ scale: 1.5}} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:"left",
              width:'500px', 
              height:'200px',}}/>
        </motion.div>
        </Box>
      </Grid>
      
    </Grid>
   
        </div>
            
       
       
       
    
    )
}

export default ShowPhoto