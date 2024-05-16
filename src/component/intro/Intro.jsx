import React from "react";
import "./intro.css";
import { img2, img3 } from "../../asset/image";


const Intro = () => {
  return (
    <>
    <div id="intros">
        <div className="design">
            <h3 className=" hello text-lg ">Hello,</h3>
            <p className=" max-w-[250px] text-2xl font-bold">I'M <spam className=" text-yellow-300">Samiksha</spam> WebSite Designer</p>
            <p className="max-w-[400px] text-xs">I am a skilled and passionate web designer with 
            experience in creating visually appending and user-friendly websites</p>
          <button className="button text-lg"> <img src={img3} alt="img3" className=" h-4 object-cover w-4 "/> Hire Me</button>
          
        </div>
        <div>
          <img src={img2}
          alt="img2"
          className="img2"
          />
        </div>
        

    </div>
    </>
  );
};

export default Intro;