import React from "react";
import {Link} from 'react-router-dom'
import MailTemplate from "./MailTemplate";
import { createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion";
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function Mail(){
    return(
        <div>

        <GlobalStyle />
          <motion.div className="back">
          <Link to="/">← Home</Link>
          </motion.div>
        <MailTemplate>hi</MailTemplate>
        </div>
        
    )
}

export default Mail