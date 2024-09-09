"use client"
import About from '@/Components/About';
import ContactMe from '@/Components/ContactMe';
import Home from '@/Components/Home';
import Navbar from '@/Components/Navbar';
import Services from '@/Components/Services';
import Projects from '@/Components/Projects';
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from 'react'




const page = () => {
    useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
},[])


  return (
    <div >
      <Navbar/>      
      <Home />
      <About/>
      <Projects />
      <Services />
      <ContactMe />
      </div>
      
  )
}

export default page
