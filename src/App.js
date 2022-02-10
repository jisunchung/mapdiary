import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Mail from "./Mail";
import Seoul from "./Category/Seoul";
import Busan from "./Category/Busan";



function App() {
  return ( 
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/seoul" element={<Seoul/>}/>
      <Route path="/busan" element={<Busan/>}/>
      </Routes>
  )
}

export default App;