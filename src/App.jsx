/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Aditya Atbhaiya",
  title: "Web Developer",
  email: "atbhaiya.aditya08@gmail.com",
  gitHub: "https://github.com/AdityaAtb09",
  // instagram: "microsoft",
  linkedIn: "https://www.linkedin.com/in/aditya-atbhaiya-71b67524a",
  // medium: "",
  // twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
