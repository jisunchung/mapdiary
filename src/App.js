import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Mail from "./Mail";
import Seoul from "./Seoul";
import Busan from "./Busan";
import Inc from "./Inc";
import Jeju from "./Jeju";
import Mok from "./Mok"
import Yeo from "./Yeo"

function App() {
  return ( 
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/seoul" element={<Seoul/>}/>
      <Route path="/busan" element={<Busan/>}/>
      <Route path="/incheon" element={<Inc/>}/>
      <Route path="/jeju" element={<Jeju/>}/>
      <Route path="/mokpo" element={<Mok/>}/>
      <Route path="/yeosu" element={<Yeo/>}/>
      </Routes>
  )
}

export default App;