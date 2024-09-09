'use client'
import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <div className="text-center">
         <h1 className='fw-bold my-5'>{props.First} <span  style={{color:"orange"}}>{props.Second}</span>{props.Third} </h1>
    </div></div>
    

    
  )
}

export default Heading
