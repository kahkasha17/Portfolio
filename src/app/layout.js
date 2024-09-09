"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <BrowserRouter>
      <title>Portfolio</title>
      <meta
        name="description"
        content="It is React Based Project that demonstrate my proficiency in building scalable, efficient and user friendly interfaces. This project contains a collection of my  personal projects and portfolio pieces, showcasing my skills and experience in React. Technology use: React,  JSX, CSS 3, Bootstrap 5, Javacript, NextJs .
        Link: https://github.com/kahkasha17/Portfolio.git"
      />
      <meta name="keywords" content="keyword1, keyword2, keyword3" />
      <meta property="og:title" content="Title Here" />
      <meta property="og:description" content="Description Here" />
      <meta property="og:image" content="image_url_here" />
      <link rel="icon" href="path/to/favicon.ico" />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </BrowserRouter>
  );
}
