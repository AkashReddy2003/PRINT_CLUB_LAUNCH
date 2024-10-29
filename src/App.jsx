import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./assets/logo.png"
import bg from "./assets/bg.png"
import th1 from "./assets/th_01.png"
import th2 from "./assets/th_02.png"
import th3 from "./assets/th_03.png"
import bb1 from "./assets/bb_02.png"
import dw1 from "./assets/dw_01.png"
import dw2 from "./assets/dw_01.png"
import jk1 from "./assets/jk_01.png"
import jw1 from "./assets/jw_01.png"
import mot1 from "./assets/mot_02.png"
import op1 from "./assets/op_01.png"
import op2 from "./assets/op_02.png"
import sw1 from "./assets/sw_01.png"
import sw2 from "./assets/sw_02.png"
import zo1 from "./assets/zo_01.png"
import Cards from './components/cards/Cards'
import Timer from './components/timer/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className='maincont' style={{display:"flex"}}>
      <div className='section' style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FFF8E8",flexDirection:"column"}}>
        <h1 className='montserrat name'>PRINT CLUB</h1>
        <img src={logo} className='logo'/>
        <p className='montserrat desc'>
        Welcome to Print Club. Here, stickers and posters aren’t just products – they’re expressions of rebellion. From iconic posters that redefine walls to stickers that make a statement on anything you own, our designs are for those who stand out. Step into a world where art is raw, bold, and unfiltered
        </p>
        <div style={{width: "50%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:20}}>
          <input placeholder='Enter your email' className='montserrat input'/>
          <a className='buttontext'>Notify me</a>
        </div>

      </div>
      <div className='section' style={{display:"flex",justifyContent:"center",alignItems:"center",background:"black",}}>
        
       
        <div style={{width: "50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 className='montserrat' style={{width: "60%",color:"#FFF8E8",textAlign:"center"}}>No Rules, Just Bold Designs. Print Club Going Live Soon</h1>
        <Timer/>
        </div>
        

      </div>

    </div>
    <div style={{display:"flex",alignSelf:"center",position: "absolute",justifyContent:"center",alignItems:"center"}} className='maincards'>
      <Cards/>
    </div>
   
    </div>
  )
}

export default App
