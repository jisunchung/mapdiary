import React, { useState } from "react";
import { Link } from "react-router-dom";
import MailTemplate from "./MailTemplate";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";

const slidUp = keyframes`
    from {
        transform: translateY(200px)
    }
    to {
        transform: translateY(0px);
    }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  
`;

const MailBlock = styled.div`
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slidUp};
  animation-fill-mode: forwards;
`;

function Mail() {
  const Number = 11;
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const Check = () => {
    if (parseInt(password) === Number) {
      // alert("정답입니다! 생일을 축하드립니다^^");
      setShow(true);
    } else {
      alert("틀렸습니다! 다시 시도해주세요!");
      setShow(false);
    }
    setPassword("");
  };
  const onChange = (e) => {
    const pass = e.target.value;
    console.log(e.target.value);
    setPassword(pass);
  };

  return (
    <div>
      <GlobalStyle />
      <div style={{ textAlign: "center", paddingTop: 40 }}>
        장우에게 주어진 소원의 갯수는?
        <br />
        <input name="password" onChange={onChange} value={password}></input>
        <button onClick={() => Check()}>입력!</button>
      </div>
      <motion.div className="back">
        <Link to="/">← Home</Link>
      </motion.div>
      {show && (
        <MailBlock>
          <MailTemplate />
        </MailBlock>
      )}
    </div>
  );
}

export default Mail;
