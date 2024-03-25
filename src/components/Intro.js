// Intro.js
import React from "react";
import sampleImg from "../assest/profile.png";

const Intro = () => {
    return (
        <div id="intro">
            <div id="profilecover">
                <img src={sampleImg} alt="Profile Img"></img>
            </div>
            <div id="text">
                <p>I am</p>
                <br></br>
                <h1>Tanay Naik</h1>
                <br></br>
                <p>& I am</p>
                <br></br>
                <h1 id="prof_title"></h1>
            </div>
        </div>
    );
};

export default Intro;
