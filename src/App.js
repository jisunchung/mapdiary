import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Mail from "./Mail";

function App() {
  return ( 
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/mail" element={<Mail/>}/>
      </Routes>
  )
}

export default App;