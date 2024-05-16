import React from "react";
import Intro from "./component/intro/Intro";
import Skills from "./component/skills/Skills";
import Clients from "./component/clients/Clients";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";

// import Nav from "./Component/Nav";


const App = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Portfolio/>
    <Clients/>
    <Footer/>
    
    {/* <Nav/> */}
    </>
  );
};

export default App;