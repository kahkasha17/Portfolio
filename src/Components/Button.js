"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Button = (props) => {
  const router = useRouter();
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={() => router.push(props.link)}
        className="btn btn-outline-primary btn-light rounded-pill border-dark px-4 fw-bold mx-2"
      >
        {props.name} &#8599;
      </motion.button>
    </>
  );
};

export default Button;
