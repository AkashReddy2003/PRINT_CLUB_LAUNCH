import { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import reactLogo from './assets/react.svg'
import { RotatingLines } from "react-loader-spinner";
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./assets/logo.webp"
import bg from "./assets/bg.webp"
import th1 from "./assets/th_01.webp"
import th2 from "./assets/th_02.webp"
import th3 from "./assets/th_03.webp"
import bb1 from "./assets/bb_02.webp"
import dw1 from "./assets/dw_01.webp"
import dw2 from "./assets/dw_01.webp"
import jk1 from "./assets/jk_01.webp"
import jw1 from "./assets/jw_01.webp"
import mot1 from "./assets/mot_02.webp"
import op1 from "./assets/op_01.webp"
import op2 from "./assets/op_02.webp"
import sw1 from "./assets/sw_01.webp"
import sw2 from "./assets/sw_02.webp"
import zo1 from "./assets/zo_01.webp"
import Cards from './components/cards/Cards'
import Timer from './components/timer/Timer'
import { GloabalContext, MyContextProvider } from './context/GlobalContext';
function App() {
  const [email, setEmail] = useState("");
  const {load,add}=useContext(GloabalContext);

  return (
   
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className='maincont' style={{display:"flex"}}>
      <motion.div className='section' style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FFF8E8",flexDirection:"column"}}
      initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, opacity: 1 }}        // Animate to the final position
      transition={{
        type: 'spring',                     // Gives it a natural, smooth easing
        stiffness: 80,                      // Adjust stiffness for a bouncier effect
        damping: 15,                        // Adjust damping for smoothness
      }}>
        <h1 className='montserrat name'>PRINT CLUB</h1>
        <img src={logo} className='logo'/>
        <p className='montserrat desc'>
        Welcome to Print Club. Here, stickers and posters aren’t just products – they’re expressions of rebellion. From iconic posters that redefine walls to stickers that make a statement on anything you own, our designs are for those who stand out. Step into a world where art is raw, bold, and unfiltered
        </p>
        <div style={{width: "50%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:20}}>
          <input placeholder='Enter your email' className='montserrat input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <a className='buttontext'
          onClick={()=>{
            add(email);
          }}
          >{load?
          <RotatingLines
          strokeColor="grey"
          strokeWidth="2"
          animationDuration="0.75"
          width="30"
          visible={true}
        />:
          <span>Notify me</span>}</a>
        </div>

      </motion.div>
      <motion.div className='section' style={{display:"flex",justifyContent:"center",alignItems:"center",background:"black",}}
      initial={{ x: '200vw', opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, opacity: 1 }}        // Animate to the final position
      transition={{
        type: 'spring',                     // Gives it a natural, smooth easing
        stiffness: 80,                      // Adjust stiffness for a bouncier effect
        damping: 15,                        // Adjust damping for smoothness
      }}>
        
       
        <div style={{width: "50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1  className='montserrat pad' style={{width: "60%",color:"#FFF8E8",textAlign:"center"}}>No Rules, Just Bold Designs. Print Club Going Live Soon</h1>
        <Timer/>
        </div>
        

      </motion.div>

    </div>
    <div style={{display:"flex",alignSelf:"center",position: "absolute",justifyContent:"center",alignItems:"center"}} className='maincards'>
      <Cards/>
    </div>
   
    </div>
    
  )
}

export default App
