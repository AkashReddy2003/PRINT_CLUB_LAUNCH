import React, { useEffect, useState } from 'react'

export default function Timer() {
    const endTime = new Date('01 jan 2025').getTime();
  const [currentTime,setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days).toString().padStart(2,0);
  const remainingHours = Math.floor( (gap % days) / hours).toString().padStart(2,0);
  const remainingMinutes = Math.floor( (gap % hours) / minutes).toString().padStart(2,0);
  const remainingSeconds = Math.floor( (gap % minutes) / seconds).toString().padStart(2,0);

  useEffect(()=>{
    setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
  },[currentTime]) // 11:30:55
  return (
    <div style={{display:"flex",flexDirection:"row",marginTop:50,maxWidth: "85vw",}}>
        <div  style={{height: 80,width: 60,background:"#FFF8E8",display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,flexDirection:"column",boxShadow: "0 0 20px #FFF8E8"}}>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",lineHeight:0.1}}>{remainingDays}</h1>
        <h1  className='montserrat' style={{color:"black",textAlign:"center",fontSize: 15,lineHeight:0.1}}>Days</h1>
        </div>
        <div  style={{height: 80,width: 60,display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,}}>
        <h1 className='montserrat' style={{color:"#FFF8E8",textAlign:"center"}}>:</h1>
        </div>
        <div  style={{height: 80,width: 60,background:"#FFF8E8",display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,flexDirection:"column",boxShadow: "0 0 20px #FFF8E8"}}>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",lineHeight:0.1}}>{remainingHours}</h1>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",fontSize: 15,lineHeight:0.1}}>Hours</h1>
        </div>
        <div  style={{height: 80,width: 60,display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,}}>
        <h1 className='montserrat' style={{color:"#FFF8E8",textAlign:"center"}}>:</h1>
        </div>
        <div  style={{height: 80,width: 60,background:"#FFF8E8",display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,flexDirection:"column",boxShadow: "0 0 20px #FFF8E8"}}>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",lineHeight:0.1}}>{remainingMinutes}</h1>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",fontSize: 15,lineHeight:0.1}}>Mins</h1>
        </div>
        <div  style={{height: 80,width: 60,display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,}}>
        <h1 className='montserrat' style={{color:"#FFF8E8",textAlign:"center"}}>:</h1>
        </div>
        <div  style={{height: 80,width: 60,background:"#FFF8E8",display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 10,flexDirection:"column",boxShadow: "0 0 20px #FFF8E8"}}>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",lineHeight:0.1}}>{remainingSeconds}</h1>
        <h1 className='montserrat' style={{color:"black",textAlign:"center",fontSize: 15,lineHeight:0.1}}>Secs</h1>
        </div>
      
     
    </div>
  )
}
