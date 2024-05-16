import React from "react";
import "./portfolio.css";
import { img11, img33, img7, img88, } from "../../asset/image";

const Portfolio = () => {
  return (
    <>
    <div id="main-div">
        <h1 className=" text-5xl font-semibold pt-10 "> My Portfolio</h1>
        <p className=" paragraph"> I take in paying attention to the smallest details and making sure 
        that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve
         their goals and create a strong online presence.</p>
         <div className="  images mt-3">
            <img src= {img7} alt="img7" className=" image"/>
            <img src={img88} alt="img88"className=" image"/>
            <img src={img7} alt="img9"className=" image"/>
            <img src={img11} alt="img11"className=" image"/>
            <img src={img88} alt="img22"className=" image"/>
            <img src={img33} alt="img33"className=" image"/>

         </div>
        <button className=" bg-white text-black px-4 py-1 mt-5 rounded-full font-bold border-none"> See More</button> 

    </div>
    
    </>
  );
};

export default Portfolio;