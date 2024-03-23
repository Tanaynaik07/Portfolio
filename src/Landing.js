import React from "react";
import "../src/landing.css";
import sampleImg from "../src/assest/image 7.png";
import Card from "./components/Card";

const Landing = () => {

    
    let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions";
    let aboutMe = "I am a passionate and driven computer science student with a strong interest in web development and software engineering. From a young age, I have been fascinated by technology and its potential to solve complex problems and improve lives. Throughout my academic journey, I have developed a solid foundation in programming languages such as Java, Python, and JavaScript, as well as in-depth knowledge of data structures, algorithms, and database management systems.\n\nBeyond my technical skills, I am a proactive team player with excellent communication and collaboration abilities. I enjoy working on challenging projects that push me to learn and grow, and I am always eager to explore new technologies and methodologies. In my free time, I like to participate in coding competitions, contribute to open-source projects, and engage in community events related to computer science.\n\nI am excited about the opportunity to leverage my skills and knowledge in a dynamic work environment, and I am eager to contribute to innovative projects that make a meaningful impact. Let's connect and explore how we can collaborate to achieve our goals!";



    
    return (
        <main>
            <div id="intro">
                <img src={sampleImg} alt="Profile Img"></img>
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


            <div id="aboutme">
            <div className="cover coveraboutme"></div>
            <div className="coverheader aboutheader"></div>
            <h1>About me</h1>
                {aboutMe}
            </div>
          

            <div id="education">
                <h2>Education</h2>
                <div className="education-entry">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p><strong>University:</strong> ABC University</p>
                    <p><strong>Location:</strong> City, State</p>
                    <p><strong>Dates:</strong> September 2019 - May 2023</p>
                    <p><strong>GPA:</strong> 3.8/4.0</p>
                    <p><strong>Relevant Coursework:</strong> Algorithms and Data Structures, Database Management Systems, Software Engineering, Computer Networks</p>
                    <p><strong>Thesis:</strong> "Analysis of Machine Learning Algorithms for Sentiment Analysis"</p>
                </div>
                <div className="education-entry">
                    <h3>High School Diploma</h3>
                    <p><strong>School:</strong> XYZ High School</p>
                    <p><strong>Location:</strong> City, State</p>
                    <p><strong>Dates:</strong> September 2015 - May 2019</p>
                    <p><strong>GPA:</strong> 4.0/4.0</p>
                    <p><strong>Activities:</strong> President of Computer Science Club, Science Fair Participant</p>
                </div>
            </div>


            <div id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: Java, Python, C++</li>
                    <li>Web Development: HTML, CSS, JavaScript</li>
                    <li>Frameworks/Libraries: React.js, Node.js, Django</li>
                    <li>Database Management: SQL, MongoDB</li>
                    <li>Version Control: Git</li>
                    <li>Software Development Tools: Visual Studio Code, IntelliJ IDEA</li>
                    <li>Operating Systems: Windows, Linux</li>
                    <li>Problem Solving: Data Structures, Algorithms</li>
                    <li>Networking: TCP/IP, OSI Model</li>
                    <li>Machine Learning: TensorFlow, Scikit-learn</li>
                    <li>Cloud Computing: AWS, Azure</li>
                    <li>Agile Methodologies: Scrum, Kanban</li>
                </ul>
            </div>


            <div id="projects">
                <h1>Project</h1>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div id="contact">
            <h1>Contact Us</h1>
            </div>

            <div id="extra">
                <h1>Extra info</h1>
            </div>
        </main>
    )
}

export default Landing;