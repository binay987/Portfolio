import  "./AboutContentStyles.css";
import profile from "../assets/profile.jpg";
import react from "../assets/react.jpg";



import React from 'react'
import {Link} from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> 
                Hi,I'm Binaya Basnet currenty
                pursuing bachelor in Engineering.
                I'm a react front-end developer.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img  src={profile} className="img"
                    alt="true"/>

                </div>
                <div className="img-stack bottom">
                    <img  src={react} className="img"
                    alt="true"/>

                </div>
            </div> 

        </div>
    </div>
  )
}

export default AboutContent