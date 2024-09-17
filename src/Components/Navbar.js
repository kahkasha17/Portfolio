"use client";
import React from "react";
import "@/app/MyCSS/Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div id="Navbar ">
      <nav
        className="navbar  navbar-expand-lg navbar-dark  my-2  px-2 py-2  "
        id="NavItem"
        style={{
          backgroundImage: "url('/images/galaxy.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  href="#About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#Projects "
                >
                  Project
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#Services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#ContactMe"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
