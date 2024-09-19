import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <>
      <title>Portfolio</title>
      <meta
        name="description"
        content="Welcome to my Next JS-based portfolio!I am a front-end developer and  this Project  demonstrate my proficiency in building scalable, efficient and npm user friendly interfaces. This project contains a collection of my  personal projects and portfolio pieces, showcasing my skills and experience in React. Technology use: React,  JSX, CSS 3, Bootstrap 5, Javacript, NextJs. Call to Action: Explore my work and get in touch for freelance website development services."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        key={1}
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        key={2}
        sizes="32x32"
        href="/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        key={3}
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta
        name="keywords"
        content="Front-end developer, React portfolio, Web development projects, UI/UX design,Freelance website development,Next.js developer,Responsive web design,Personal portfolio,Front-end coding projects"
      />
     
     
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
