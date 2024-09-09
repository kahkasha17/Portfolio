'use client'
import React from "react";
import Button from '../Button/page';
import Link from "next/link";


const Home = () => {
  const link="ContactMe";
  return (

    
    <>
      
      
      <div className="container content  " id="Home">
          <div className="text-center my-3 ">
          <h1 className="fw-bold">Hello</h1>
          <h1 className="fw-bold">
            I'm{" "}
            <span className="" style={{ color: "orange" }}>
              Kahkasha 
            </span>
            
          </h1>
          <h1 className="fw-bold">Front-End Developer</h1>
        </div>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h3>
                <span className="" style={{ fontSize: "100px" }}>
                  &ldquo;
                </span><br></br>
                
                Welcome to My Creative Corner! I'm Passionate & Optimistic  Front-End Developer.
                
              </h3>
            </div>

            <div className="col text-center  ">
            <img src="Alien.png" style={{width:"200px"}} alt="image not found" />
            <div className="div text-center  px-2 ">
          <Button name="Resume" link="resume.pdf" />
          <Button name="Hire Me" link="#ContactMe"/> 
          
        </div>
            </div>


            <div className="col">
              <h3>
                <span className="" style={{ fontSize: "100px" }}>
                  &ldquo;
                </span><br/>
                Who Loves Perfect Designs & Constantly seeks out innovative solutions to Everyday Problems
              </h3>
            </div>
          </div>
        </div>
      </div>

      
        
    </>
    
  );
};

export default Home;
