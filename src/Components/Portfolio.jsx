/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import image from "../images/socials/projects-ps-bg.gif";

// const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "College Information Website",
    description:
      "A website which will act as a virtual guide for the students and help them to choose the college of their dreams.The Tech used in this is HTML/CSS, JavaScript, MySQL."
      ,
    url: "https://github.com/AdityaAtb09/CollegeGuide",
  },
  {
    title: "E-commerce website",
    description:
     "This e-commerce website offers convenient shopping opportunities for potential customers and to have instant access to the products or services.The Tech used in this is HTML/CSS, JavaScript(Django framework), MySQL.",
    url: "https://github.com/AdityaAtb09/Benemart-Ecommerce-Store",
  },
  {
    title: "Anti Cyberbullying web app",
    description:
      "This web application will help victim file complaint, get help/advice and talk to expert.The Tech used in this is HTML/CSS, Electron Js",
    url: "https://github.com/AdityaAtb09/Cyberbullying",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor: "#b4d3ec"}}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
