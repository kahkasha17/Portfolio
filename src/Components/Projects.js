"use client";
import React, { useState } from "react";
import Button from "@/Components/Button";
import Heading from "@/Components/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  const imageArray = [
    {
      id: 1,
      imageUrl: "image-020.jpg",
      title: "Foodie Bandhu- A Restuarant Management System",
      disc: "It is a web project based on an online restaurant management system.  It follows MVC design pattern. It contains lots of features but the main feature which it makes it different from other management system is that it provides a user friendly interface, 24*7 customer support, alone eater special feature ,and so on.",
      TechUsed:
        "Spring Orm, Spring MVC, Html5, Jsp, Css3, Javascript, Bootstrap, MySql.",
      Url: "https://github.com/kahkasha17/Foodie-Bandhu.git",
    },

    {
      id: 2,
      imageUrl: "vkimage.png",
      title: "Virtual Kakasha - Online Education System",
      disc: "It is a web project based on online education system. It follows Factory design pattern. It contains lots of features but the main feature which it makes it different from other education system is that it provides a digital library, live classes, and assignments option in one platform.",
      TechUsed: "Jsp, Servlet, Html5, Css3, Javascript, Bootstrap, MySql .",
      Url: "https://github.com/kahkasha17/Virtual-Kaksha.git",
    },

    {
      id: 3,
      imageUrl: "Guessdno.png",
      title: "Guess The No Game- Console Based Game",
      disc: "It is a  console based user defined game.Where user have the three chances to choose between the 1 to 100 any no if he guess the right within the 3 chances he will win but if not computer will win the game",
      TechUsed: "",
      Url: "https://github.com/kahkasha17/Virtual-Kaksha.git",
    },
  ];
  const [images, setImages] = useState(imageArray);
  return (
    <div id="Projects">
      <div className="container">
        <Heading First="My" Second="Projects" Third=" !" />
        <div className="row">
          {images.map((e) => (
            <div className="col-md-4 col-xs-12 my-3  " key={e.Url}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="card shadow-lg p-3 mb-5 bg-body rounded"
              >
                <img
                  src={e.imageUrl}
                  className="card-img-top"
                  alt="Image Not FOund"
                  style={{ height: "35vh" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.disc.slice(0, 90)}...</p>
                  <Button name="Know More" link={e.Url} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
