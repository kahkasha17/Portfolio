"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'




const Button = (props) => {
 
   const router = useRouter();
  

  
  return (
    <>
   
      <button onClick={()=>router.push(props.link)}  className="btn btn-outline-primary btn-light rounded-pill border-dark px-4 fw-bold mx-2">
            {props.name} &#8599;
            </button>
          </>
  )
}

export default Button
