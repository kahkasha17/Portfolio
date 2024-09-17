"use client";
import React from "react";
import "@/app/MyCSS/Global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGit,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div id="ContactMe">
      <div className="container-fluid bg-dark text-light mt-5">
        <div className="heading py-4 px-4  border-bottom">
          <div className="row  ">
            <div className="col mx-auto">
              <h1 style={{ color: "orange" }}>
                <b>
                  <i>Lets Connect...</i>{" "}
                </b>
              </h1>
            </div>
          </div>
        </div>

        <div className="heading py-4 px-4 mx-auto border-bottom">
          <div className="row px-2">
            <div className="col-md-4 col-sm-12 mx-auto">
              <h3 className="fw-bold" style={{ color: "orange" }}>
                Galaxy Code
              </h3>
              <p >
                Firstly, Thank You so much to visit my Page.This page is the
                part of my Galaxy Family also it's my Portfolio Page as Well.I'm
                a Front-End Developer who loves to Explore new things so if you
                have any suggestions ragarding this Page Please connect with
                me&#128512;.
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h3 className="fw-bold" style={{ color: "orange" }}>
                Contact
              </h3>
              <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
                <li>+91 8800297781</li>
                <li>codewithkahkasha1711@gmail.com</li>
                <li>galaxy.portfolio.com</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 text-center py-5 mx-auto">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mx-2 icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kahkasha-rafat-fatima-8672a0231/"
                  )
                }
              />
              <FontAwesomeIcon
                icon={faGit}
                className="mx-2 icon"
                onClick={() => window.open(" https://github.com/kahkasha17/")}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="mx-2 icon"
                onClick={() => window.open(" https://x.com/khanza1517")}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="mx-2 icon"
                onClick={() =>
                  window.open(
                    " https://www.instagram.com/codewithkahkasha1517/"
                  )
                } 
              />
              <FontAwesomeIcon
                icon={faTelegram}
                className="mx-2 icon"
                onClick={() =>
                  window.open(" https://t.me/CodeWithKahkasha1517")
                }
              />
            </div>
           </div>
        </div>

        <div className="footer  text-center fw-bold">
          Created by Galaxy &#169; All right reserved
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
