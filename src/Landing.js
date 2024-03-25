import React, { useEffect, useRef, useState } from "react";
import "../src/landing.css";
import sampleImg from "../src/assest/profile.png";
import samplebg from "../src/assest/background.jpeg";
import legal from "../src/assest/legal.jpeg";
import vortex from "../src/assest/Vortex_360_logo.png";
import shoe from "../src/assest/shoe.jpg";
import Card from "./components/Card";
import Tiptool from "./components/Tiptool";
import Skills from "./components/Skills";
import ProjectLayover from "../src/components/PorjectLayover"; // Import the ProjectLayover component

const Landing = () => {
    let lorem =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions";
    let aboutMe =
        "I am a passionate and driven computer science student with a strong interest in web development and software engineering. From a young age, I have been fascinated by technology and its potential to solve complex problems and improve lives. Throughout my academic journey, I have developed a solid foundation in programming languages such as Java, Python, and JavaScript, as well as in-depth knowledge of data structures, algorithms, and database management systems.\n\nBeyond my technical skills, I am a proactive team player with excellent communication and collaboration abilities. I enjoy working on challenging projects that push me to learn and grow, and I am always eager to explore new technologies and methodologies. In my free time, I like to participate in coding competitions, contribute to open-source projects, and engage in community events related to computer science.\n\nI am excited about the opportunity to leverage my skills and knowledge in a dynamic work environment, and I am eager to contribute to innovative projects that make a meaningful impact. Let's connect and explore how we can collaborate to achieve our goals!";

    const introRef = useRef(null);
    const aboutMeRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const extraRef = useRef(null);

    const [showProjectLayover, setShowProjectLayover] = useState(false); // State to control the visibility of the ProjectLayover

    useEffect(() => {
        // Callback function to handle intersection changes
        function handleIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // When the element is intersecting (visible in the viewport)
                    const id = entry.target.id;
                    let divs = entry.target.querySelectorAll('div');
                    console.log("Scrolled to:", id);

                    // Add animation class based on ID
                    switch (id) {
                        case "intro":
                            entry.target.classList.add("intro-animation");
                            break;
                        case "aboutme":
                            divs = entry.target.querySelectorAll('div');
                            console.log(divs);
                            divs[0].classList.add("coveraboutme", "coverborder");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.remove("invisible");
                            break;
                        case "education":
                            divs = entry.target.querySelectorAll('div');

                            divs[0].classList.add("covereducation");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.remove("invisible");
                            break;
                        case "skills":
                            divs = entry.target.querySelectorAll('div');

                            divs[0].classList.add("coverskills");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.remove("invisible");

                            break;
                        case "projects":
                            console.log("Projects section is visible");
                            divs = entry.target.querySelectorAll('div');
                            divs[0].classList.add("coverprojects");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.remove("invisible"); // Remove the invisible class from the outer div
                            
                            break;

                        default:
                            break;
                    }

                    // Disconnect the observer for this entry
                    observer.unobserve(entry.target);
                }
            });
        }

        // Options for the IntersectionObserver
        const options = {
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        // Create a new IntersectionObserver
        const observer = new IntersectionObserver(handleIntersection, options);

        // Observe each main div
        observer.observe(introRef.current);
        observer.observe(aboutMeRef.current);
        observer.observe(educationRef.current);
        observer.observe(skillsRef.current);
        observer.observe(projectsRef.current);
        observer.observe(contactRef.current);
        observer.observe(extraRef.current);

        // Cleanup function
        return () => {
            observer.disconnect();
        };
    }, []);

    // Function to toggle the visibility of ProjectLayover
    const toggleProjectLayover = () => {
        setShowProjectLayover(!showProjectLayover);
        document.body.style.overflow = showProjectLayover ? 'auto' : 'hidden'; // Toggle body overflow
    };

    useEffect(() => {
        if (showProjectLayover) {
            document.body.style.overflow = 'hidden'; // Hide scrolling when ProjectLayover is shown
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when ProjectLayover is hidden
        }
    }, [showProjectLayover]);
    return (
        <>
        <main style={{ overflow: showProjectLayover ? 'hidden' : 'auto' }}>
            <div id="intro" ref={introRef}>
                <div id="profilecover">
                    <img src={sampleImg} alt="Profile Img" />
                </div>
                <div id="text">
                    <p>I am</p>
                    <br />
                    <h1>Tanay Naik</h1>
                    <br />
                    <p>& I am</p>
                    <br />
                    <h1 id="prof_title"></h1>
                </div>
            </div>

           
            <div id="aboutme" ref={aboutMeRef}>
                <div className="cover"></div>
                <div className=" "></div>
                <div id="aboutcontent" className="invisible">
                    <h1>About me</h1>
                    {aboutMe}
                </div>
            </div>

            <div id="education" ref={educationRef}>
                <div className="cover "></div>
                <div className=""></div>
                <div className="invisible">
                    <h2>Education</h2>
                    <div className="education-entry">
                        {/* Education content */}
                    </div>
                </div>
            </div>

            <div id="skills" ref={skillsRef}>
                <div className="cover "></div>
                <div className=""></div>
                <div className="invisible">
                    <Skills />
                </div>
            </div>

            <div id="projects" ref={projectsRef}>
                <div className="cover "></div>
                <div className=""></div>
                <div className="invisible">
                    <h1>Projects</h1>
                    <div className="cards">
                    
                        <div id="html">

                            <Card className="cardsItem" backImg={legal} title="Legally" tools="Next.js" />
                            <Card className="cardsItem" backImg={vortex} title="Vortex 360" tools="React.js" />
                            <Card className="cardsItem" backImg={shoe} title="E-Store" tools="Vanilla js" />
                            
                        </div>
                        
                        <h3 onClick={toggleProjectLayover}>More...</h3>
                    </div>
                </div>
            </div>

            <div id="contact" ref={contactRef}>
                <h1>Contact Us</h1>
            </div>

            <div id="extra" ref={extraRef}>
                <h1>Extra info</h1>
            </div>

            <Tiptool />
        </main>
            {showProjectLayover && <ProjectLayover onClose={toggleProjectLayover} />} {/* Render ProjectLayover conditionally */}
            </>
    );
};

export default Landing;
