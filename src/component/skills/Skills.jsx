import React from "react";
import { img4, img5, img6 } from "../../asset/image";
import "./skills.css";

const Skills = () => {
  return (
    <>
    <div id="skills">
        <h1 className=" text-5xl font-semibold pt-40 mb-11"> What I Do</h1>
        <p className="paragraph"> I am a skilled and passionate web designer with experience in 
        creating visually appealing and user-friendely websites. i have a strong understanding 
        of design and a keen eye for detail. i am proficient in HTML, CSS, and JavaScript, as well as design software
        such as Adobe Photoshop and Illustrator.  </p>
        <div className="skillsBars">
          <div className="skillBar">          
            <img src={img4}alt="" className="skillsImg"/>
            <div className="skillBarText">
            <h2 className=" font-semibold">UI/UX design</h2>
            <p> This is a demo text, you canwrite your owncontent here </p>
            </div>

          </div> 
          <div className="skillBar">
            <img src={img5} alt="" className="skillsImg"/>
            <div className="skillBarText">
            <h2 className=" font-semibold" > Website design</h2>
            <p> This demo text can be changed while making the production ready site.</p>
            </div>

          </div>
          <div className="skillBar">
            <img src={img6} alt="" className="skillsImg"/>
            <div className="skillBarText">
            <h2 className=" font-semibold"> App design</h2>
            <p> you canwritetext related tomobile app development</p>
            </div>

          </div>

        </div>

    </div>
    </>
  );

};

export default Skills;