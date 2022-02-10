import React from "react";
import face from './images/face2.jpeg';
import { motion } from "framer-motion";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const TemplateBlock = styled.div`
width: 100px;


position: relative; 
background:#282c34;



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
        <header style={{backgroundColor:"#282c34",color:"white"}}>
            <Link to="/">home</Link>
            <TemplateBlock>
  
            <motion.div 
      whileHover={{ scale: randomNum(1,2)}} whileTap={{ scale: randomNum(1,2) }}>
      <img alt='face' src={face} style={{float:"left",
              width:'100px', 
              height:'80px',}}/>
        </motion.div> 
        <p>하...</p>
        <motion.div 
      whileHover={{ scale: randomNum(1,2)}} whileTap={{ scale: randomNum(1,2) }}>
      <img alt='face' src={face} style={{ 
              width:'400px', 
              height:'300px',}}/>
        </motion.div> 
        <p>tq</p>
        <motion.div 
whileHover={{ scale: randomNum(1,2)}} whileTap={{ scale: randomNum(1,2) }}>
      <img alt='face' src={face} style={{float:"right",
              width:'400px', 
              height:'300px',}}/>
        </motion.div> 
        <p>tq</p>
        <motion.div 
whileHover={{ scale: randomNum(1,2)}} whileTap={{ scale: randomNum(1,2) }}>
      <img alt='face' src={face} style={{float:"left",
              width:'200px', 
              height:'150px',}}/>
        </motion.div> 
        <p>tq</p>

  </TemplateBlock>;
        </header>
            
       
       
       
    
    )
}

export default ShowPhoto