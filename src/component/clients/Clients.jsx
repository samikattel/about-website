import React from "react";
import "./clients.css";
import { facebook, imgA, imgB, imgC, imgDD, instagram, mail, twitter, whatsapp } from "../../asset/image";


const Clients = () => {
  return (
    <>
    <section id="contactPage">
    <div id=" clients">
        <h1 className=" contactPageTitle "> My Clients</h1>
        <p className=" clientDesc"> I have had the opportunity to work with a diverse group of companies. 
            some of the notable companies i hace worked with includes </p>
    <div className=" clientImgs">
      <img src={imgA} alt="imgA" className="clientImg"/>
      <img src={imgB} alt="imgB"className="clientImg"/>
      <img src={imgC} alt="imgC"className="clientImg"/>
      <img src={imgDD} alt="imgD"className="clientImg "/>
      
      </div>        

    </div>
    <div id="Contact">
      <h1 className=" contactPageTitle "> Contact</h1>
      <p className=" contactDesc"> Please fill out the form below
       to discuss any work opportunities</p>
       <form className="contactForm">
        <input type="text" className="name" placeholder="Enter your Name"/>
        <input type="Email" className="email" placeholder="Enter your Email"/>
        <textarea className="msg" name="Message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value="send" className="submitBtn"> Submit</button>

        <div className="links mt-6">
          <img src={instagram} alt="insta" className="link"/>
          <img src={facebook} alt="facebook" className="link"/>
          <img src={twitter} alt="twitter"className="link"/>
          <img src={whatsapp} alt="whatsapp" className="link"/>
          <img src={mail} alt="mail" className="link"/>
          
          
          
        </div>
       </form>


    </div>
    </section>
    </>
  );
};

export default Clients;