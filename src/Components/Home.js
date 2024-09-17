"use client";
import React from "react";
import Button from "@/Components/Button";
import { motion } from "framer-motion";


const Home = () => {
  const link = "ContactMe";
  return (
    <>
      <div className="container content  " id="Home">
        <div className="text-center my-3 ">
          <h1 className="fw-bold">Hello</h1>
          <h1 className="fw-bold">
            I'm{" "}
            <span  style={{ color: "orange" }}>
              Kahkasha
            </span>
          </h1>
          <h1 className="fw-bold">Front-End Developer</h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-md-4 col-sm-12">
              <h3>
                <span style={{ fontSize: "100px" }}>
                  &ldquo;
                </span>
                <br></br>
                Welcome to My Creative Corner! I'm Passionate & Optimistic
                Front-End Developer.
              </h3>
            </div>

            <div className="text-center col-md-4 col-sm-12 ">
              <motion.img
                initial={{ x: -50, opacity: 2 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0,
                  x: { type: "spring", stiffness: 66 },
                  opacity: { duration: 1 },
                  ease: "easeIn,",
                  duration: 1,
                }}
                src="/public/images/Alien.png"
                style={{ width: "200px" }}
                alt="image not found"
              />
              <div className="div text-center  px-2 ">
                <Button name="Resume" link="resume.pdf" />
                <Button name="Hire Me" link="#ContactMe" />
              </div>
            </div>

            <div className="text-center col-md-4 col-sm-12">
              <h3>
                <span className="" style={{ fontSize: "100px" }}>
                  &ldquo;
                </span>
                <br />
                Who Loves Perfect Designs & Constantly seeks out innovative
                solutions to Everyday Problems
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
