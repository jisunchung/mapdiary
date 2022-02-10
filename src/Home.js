import map from './images/mapb.png';
import seoul from './images/seoul.png';
import inc from './images/inc.png';
import mok from './images/mok.png';
import yeo from './images/yeo.png';
import busan from './images/bu.png';
import jeju from './images/jeju.png';
import face from './images/face2.jpeg';
import './App.css';
import { Grid, Box, Hidden} from "@material-ui/core";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const goMessageBox = () => {alert('생일축하해!')}
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
        <Grid style={{backgroundColor:'rgb(132,185,193)'}} item xs={12}>
          <div style={{padding:10}}>
            <img alt='face' src={face} style={{float:'left', 
              borderRadius: '70%',width:'80px', 
              height:'80px',overflow:Hidden}}/>
          </div>
          <p style={{float:'left',padding:10}}>Map diary</p>
          <MdMailOutline style={{float:'right', padding:30}}
            onClick={() => goMessageBox()}/>
            <div className="example-container">
      <motion.div
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img alt='face' src={face} style={{float:'left', 
              borderRadius: '30px',width:'80px', 
              height:'80px',overflow:Hidden}}/>
        </motion.div> 
    </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box p={2}>
            <img alt='map' src={map} style={{width:'550px', height:'600px'}} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box p={1}>
          <motion.button
            whileHover={{ scale: 3}}
            whileTap={{ scale: 2 }}
          >
            <img alt="seoul" src={seoul}/>
          </motion.button>
          <p>서울</p>
          
          
          <motion.button
            whileHover={{ scale: 1.5}}
            whileTap={{ scale: 2 }}
          >
            <img alt="inc" src={inc}/>
          </motion.button>
          <p>인천</p>
          <button>
            <img alt="mop" src={mok}/>
          </button>
          <p> 목포</p>
          <button>
            <img alt="yeo" src={yeo}/>
          </button>
          <p>여수</p>
          <button>
            <img alt="busan" src={busan}/>
          </button>
          <p>부산</p>
          <button>
            <img alt="jeju" src={jeju}/>
          </button>
          <p>제주도</p>
          
          </Box>
        </Grid>  
      </Grid>
      
      </header>
    </div>
  );
}

export default Home;