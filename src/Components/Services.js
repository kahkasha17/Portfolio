"use client";
import React from "react";
import Button from "@/Components/Button";
import Heading from "@/Components/Heading";
import { motion } from "framer-motion";

const Services = () => {
  const serviceData = [
    {
      id: "1",
      Title: "Landing Page",
      Price: "#",
      disc: "Creating stunning and functional landing page design that perfectly fit on your brand's needs. Our services blend cretivity with user experiance to deliver captivating online experiances",
      ImageUrl: "landingpage.png",
      url: "#ContactMe",
    },
    {
      id: "2",
      Title: "Web Design",
      Price: "#",
      disc: "Creating stunning and functional websites tailored to your brand's needs.Our web design services blend cretivity with user experiance to deliver captivating online experiances",
      ImageUrl: "webdesign.jfif",
      url: "#ContactMe",
    },
    {
      id: "3",
      Title: "Social Design",
      Price: "#",
      disc: "Creating stunning and functional social design that perfectly fit on your brand's needs. Our services blend cretivity with user experiance to deliver captivating online experiances",
      ImageUrl: "socialdesign.jpg",
      url: "#ContactMe",
    },
  ];

  return (
    <div id="Services">
      <div className="container">
        <Heading First="My" Second="Services" Third=" !" />
        <div className="row">
          {serviceData.map((e) => (
            <div
             
              className="col-md-4 col-xs-12 my-3 mx-auto"
              key={e.id}
            >
              <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{ height: "75vh"}}>
                <img
                  src={e.ImageUrl}
                  className="card-img-top"
                  alt="Image Not FOund"
                  style={{ height: "35vh" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{e.Title}</h5>
                  <p className="card-text">{e.disc}</p>
                  <Button name="Hire Me" link="#ContactMe" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
