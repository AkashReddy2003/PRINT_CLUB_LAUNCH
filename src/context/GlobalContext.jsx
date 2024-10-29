import React, { createContext, useState } from 'react';
import { app } from '../config/FirebaseConfig';
import { getDatabase,push,ref,set } from "firebase/database";
import emailjs from '@emailjs/browser';
import  axios, { Axios } from 'axios';
const GloabalContext = createContext();

const MyContextProvider = ({ children }) => {
  const db=getDatabase(app);
 const url="https://print-club-backend.vercel.app/"
 //const url="http://localhost:3000/"
  const [load,setLoad]=useState(false);
  const add=async(email)=>{
    axios.post(url+"sendwelcome",{
      email:email,
      subject:"You’re on the List! Expect Big News Soon",
      message:"Hi"

    })

    setLoad(true);
    await push(ref(db,`emails`),{
      email:email,
      date:new Date(Date.now()).toISOString()
    })
    setLoad(false);

  }
  return (
    <GloabalContext.Provider value={{ load,add }}>
      {children}
    </GloabalContext.Provider>
  );
};

export { GloabalContext, MyContextProvider };