import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Mail from "./Mail";
import Seoul from "./Category/Seoul";


function App() {
  return ( 
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/seoul" element={<Seoul/>}/>
      </Routes>
  )
}

export default App;