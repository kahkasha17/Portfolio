'use client'
import React from 'react'
import "@/app/MyCSS/SunMoon.css";

const MyTheme = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center ">
    <input type="checkbox" id="theme-toggle"/>
    <label htmlFor="theme-toggle"></label>
    
  </div>

    </div>
  )
}

export default MyTheme
