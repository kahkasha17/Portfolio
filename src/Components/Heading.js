'use client'
import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'


const Heading = (props) => {
  return (
    <motion.div
    
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}   
      
    
    >
        <div className="text-center">
         <h1 className='fw-bold my-5'>{props.First} <span  style={{color:"orange"}}>{props.Second}</span>{props.Third} </h1>
    </div></motion.div>
    

    
  )
}

export default Heading
