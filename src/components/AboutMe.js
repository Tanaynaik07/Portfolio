// AboutMe.js
import React from "react";

const AboutMe = () => {
    let aboutMe =
        "I am a passionate and driven computer science student with a strong interest in web development and software engineering. From a young age, I have been fascinated by technology and its potential to solve complex problems and improve lives. Throughout my academic journey, I have developed a solid foundation in programming languages such as Java, Python, and JavaScript, as well as in-depth knowledge of data structures, algorithms, and database management systems.\n\nBeyond my technical skills, I am a proactive team player with excellent communication and collaboration abilities. I enjoy working on challenging projects that push me to learn and grow, and I am always eager to explore new technologies and methodologies. In my free time, I like to participate in coding competitions, contribute to open-source projects, and engage in community events related to computer science.\n\nI am excited about the opportunity to leverage my skills and knowledge in a dynamic work environment, and I am eager to contribute to innovative projects that make a meaningful impact. Let's connect and explore how we can collaborate to achieve our goals!";

    return (
        <div id="aboutme">
            <div className="cover"></div>
            <div className=" ">
                <h1>About me</h1>
                <div id="aboutcontent" className="invisible">
                    {aboutMe}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
