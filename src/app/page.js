"use client"
import About from './About/page';
import ContactMe from './ContactMe/page';
import Home from './Home/page';

import Navbar from './Navbar/page';
import Services from './Services/page';
import React, { useEffect } from 'react'
import Projects from './Projects/page';


const page = () => {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <div >


      <Navbar/>      
      <Home id="Home"/>
      <About id="About"/>
      <Projects id="Projects"/>
      <Services id="Services"/>
      <ContactMe id="ContactMe"/>
      </div>
      
  )
}

export default page
