import React from "react";
import face from './images/face2.jpeg';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import './App.css';


function Mok(){
    return(
        <div style={{backgroundColor:"#282c34",color:"white"}}>
            <Link className="home" style={{float:"right", padding:20}} to="/"><h1>← home</h1></Link>
            
            
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
     
      {/*  */}
     
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
      {/*  */}

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
      {/*  */}

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
      {/*  */}

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
      
    </Grid>
   
        </div>
            
       
       
       
    
    )
}

export default Mok