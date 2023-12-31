/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/socials/About-bg-ps.gif";

// const imageAltText = "purple and blue abstract background";


const description =
  "I'm a Front-end web developer studying at Vellore Insitute of Technology , Bhopal. I enjoy creating unique and simplistic user interfaces in creative ways using HTML , CSS , JavaScript and Electron Js.";


const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "c++",
  "Java",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Passionate web developer with expertise in front-end and back-end technologies, dedicated to creating dynamic and visually appealing websites. Proficient in HTML, CSS, JavaScript, and experienced in utilizing various frameworks and libraries to deliver responsive and user-friendly web applications.";
const About = () => {
  return (
    <section className="padding" id="about" style={{backgroundColor: "#b4d3ec"}}>
     {/* <img className="background" src={image} alt="image" /> */}
      {/* <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      > */}
      <div
        style={{
          width: "50%",
          padding: "4rem",
          paddingBottom:"5rem",
          margin: "3rem auto",
          textAlign: "center",
          color:"black"
        }}
      > 
        <h2 style={{color: "black" , fontWeight: "600"}}>About Myself</h2>
        <p className="large" style={{color: "black" , fontWeight: "600"}}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "black",
            fontWeight: "600"
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", color:"black", fontWeight:"600" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
