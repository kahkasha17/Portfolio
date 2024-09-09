"use client"
import React from 'react'
import Button from '../Button/page';
import Heading from '../Heading/page';


const About = () => {
  return (
    <div id="About">
        <div className="container-fluid  "id='MainAbout'>
      <div className="row">
        
        <div className="col-md-5 col-sm-12 text-center mx-auto ">
          <img src="logo-black.svg" alt="" style={{width:"90%"}}/>
        </div>
        <div className="col-md-7 col-sm-12 text-center mx-auto px-auto " >

            <Heading First="Why" Second="Hire Me" Third="?"/>

            <p className='fw-bold' ><span style={{color:"orange"}}>"Talent is cheaper than salt,what separates a talented individaul from the successful one is a lot of <b >Harworks.</b>"</span> Hello I'm <b>Kahkasha</b>, I'm a <b>Freelencer Front-End Designer</b> my greatest skill is I never give up and always try to do something out of the box with lots of Hardworks. As a front end developer I'm an expert in various front end technologies like HTML, CSS, React and soo on. Knowing so many front end languages helps me adapt to different work environments and meet different clients' needs. It also helps me create the best website possible."
            <span style={{color:"orange"}}> Want to Check my Knowledge, Just click on the below button and <b style={{color:"black"}}>Hire Me &#128512; .</b> </span>

</p>

<div className="div text-center  px-2 ">
          <Button name="Resume" link="resume.pdf" />
          <Button name="Hire Me" link="#ContactMe"/>
          
          
        </div>
        </div>
      </div></div>
    </div>
  )
}

export default About
