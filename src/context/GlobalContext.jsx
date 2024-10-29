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
    const emailsRef = ref(db, `emails`);

    // Check if the email exists in the database
    const snapshot = await get(emailsRef);
    let emailExists = false;
  
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        if (data.email === email) {
          emailExists = true;
        }
      });
    }
  
    // If the email does not exist, push it
    if (!emailExists) {
      await push(emailsRef, {
        email: email,
        date: new Date(Date.now()).toISOString(),
      });
      console.log("Email added successfully!");
    } else {
      console.log("Email already exists.");
    }
    setLoad(false);

  }
  return (
    <GloabalContext.Provider value={{ load,add }}>
      {children}
    </GloabalContext.Provider>
  );
};

export { GloabalContext, MyContextProvider };