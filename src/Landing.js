import React, { useEffect, useRef, useState } from "react";
import "../src/landing.css";
import sampleImg from "../src/assest/profile2.png";
import samplebg from "../src/assest/background.jpeg";
import legal from "../src/assest/legal.jpeg";
import vortex from "../src/assest/Vortex_360_logo.png";
import shoe from "../src/assest/shoe.jpg";
import Card from "./components/Card";
import Tiptool from "./components/Tiptool";
import Skills from "./components/Skills";
import ProjectLayover from "../src/components/PorjectLayover"; // Import the ProjectLayover component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Canvas from "./components/Canva";


const Landing = () => {
    let lorem =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions";
    let aboutMe = `
        Hi there! I'm Tanay Naik, a passionate web developer with a keen interest in creating engaging and user-friendly websites. 
        I am currently pursuing a Bachelor's degree in Computer Science. 
        I enjoy tackling new challenges and continuously expanding my knowledge to stay up-to-date 
        with the latest industry trends. While I am not on my system I would be sitting somewhere reading books  or experimenting with new recipes in the kitchen. I believe in the power of 
        continuous learning and collaboration, and I'm always excited to work on innovative projects that make a positive impact. Feel free to browse through my portfolio and get in touch if you'd like to collaborate on a project or just say hello. I'm looking forward to connecting with 
        fellow developers, designers, and enthusiasts!
        `;
    const introRef = useRef(null);
    const aboutMeRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    // const extraRef = useRef(null);

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
                            let innerdiv=divs[2].querySelectorAll('div');
                            setTimeout(() => {
                                console.log("This message will be logged after a 2-second delay.");
                                innerdiv[0].classList.remove("invisible");
                            }, 1500);

                            break;

                        case "contact":
                            console.log("Projects section is visible");
                            divs[0].classList.add("covercontact");
                            divs[1].classList.add("coverheader", "aboutheader");

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
        // observer.observe(extraRef.current);

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
            document.getElementById('main').classList.add("blur");
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when ProjectLayover is hidden
            document.getElementById('main').classList.remove("blur");
        }
    }, [showProjectLayover]);


    useEffect(() => {
        function setCoverHeight() {
            console.log("Setting cover heights...");
            const sections = [
                { ref: introRef, coverClass: "coverintro" },
                { ref: aboutMeRef, coverClass: "coveraboutme" },
                { ref: educationRef, coverClass: "covereducation" },
                { ref: skillsRef, coverClass: "coverskills" },
                { ref: projectsRef, coverClass: "coverprojects" },
                { ref: contactRef, coverClass: "covercontact" },
            ];

            sections.forEach(section => {
                const mainDiv = section.ref.current;
                const coverDiv = mainDiv.querySelector('.cover');
                if (mainDiv && coverDiv) {
                    const height = mainDiv.offsetHeight;
                    coverDiv.style.height = height + 30 + "px";
                    console.log(`Setting height for ${section.coverClass} to ${height}px`);
                }
            });
        }

        // Set cover heights initially and on window resize
        setCoverHeight();
        window.addEventListener("resize", setCoverHeight);

        return () => {
            window.removeEventListener("resize", setCoverHeight);
        };
    }, []);

    const [coverWidth, setCoverWidth] = useState(null); // State to store the width of the cover

    // Function to handle resizing and update the width of the cover
    const handleResize = () => {
        if (aboutMeRef.current) {
            const aboutMeWidth = aboutMeRef.current; // Get the width of the about me section
            const childElement = aboutMeRef.current.querySelectorAll('div');

            setCoverWidth(childElement[2].offsetWidth); // Update the width of the cover
            console.log("Cover Width:", aboutMeWidth); // Add this line to log the cover width
        }
    };


    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Call handleResize initially to set the initial width
        handleResize();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <main style={{ overflow: showProjectLayover ? 'hidden' : 'auto' }} id="main">
                <Navbar/>
                {/* <Canvas/> */}
                <div id="intro" ref={introRef}>
                    <div id="profilecover">
                        <img src={sampleImg} alt="Profile Img" />
                    </div>
                    <div id="text">
                    <h1 style={{ color: "Cyan" }}>Tanay Naik</h1>
                    <br></br>

                        <p style={{ fontWeight:"400" }}>I'm a <br></br></p> <p id="jobs">Web developer || UI UX designer || Software developer </p>

                    </div>
                </div>


                <div id="aboutme" ref={aboutMeRef}>
                    <div className="cover" style={{ width: coverWidth }}></div>
                    <div className=" "></div>
                    <div id="aboutcontent" className="invisible">
                        <h1>About me</h1>
                        {aboutMe}
                    </div>
                </div>

                <div id="education" ref={educationRef}>
                    <div className="cover" style={{ width: coverWidth }}></div>
                    <div className=""></div>
                    <div className="invisible">
                        <h2>Education</h2>
                        <div className="">
                            <div className="education-entry">
                                <h3>Bachelor of Science in Computer Science</h3>
                                <p>
                                    <strong>University:</strong> Vellore institute of technology
                                </p>
                                <p>
                                    <strong>Location:</strong> Vellore, Tamil Nadu
                                </p>
                                <p>
                                    <strong>Dates:</strong> September 2022 - 2026
                                </p>
                                <p>
                            <strong>CGPA:</strong> 7.7*
                        </p>
                                <p>
                                    <strong>Relevant Coursework:</strong> Algorithms and Data Structures, Database Management Systems, Software Engineering, Computer Networks
                                </p>
                                 
                            </div>
                            <div className="education-entry">
                                <h3>High School Diploma</h3>
                                <p>
                                    <strong>School:</strong> Macro Vision Academy
                                </p>
                                <p>
                                    <strong>Location:</strong> Burhanpur, Madhya Pradesh
                                </p>
                                <p>
                                    <strong>Dates:</strong>2018 - 2022
                                </p>
                                {/* <p>
                                    <strong>GPA:</strong> 4.0/4.0
                                </p> */}
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div id="skills" ref={skillsRef}>
                    <div className="cover" style={{ width: coverWidth }}></div>
                    <div className=""></div>
                    <div className="invisible">
                        <Skills />
                    </div>
                </div>

                <div id="projects" ref={projectsRef}>
                    <div className="cover" style={{ width: coverWidth }}></div>
                    <div className=""></div>
                    <div className="invisible ">
                        <h1>Projects</h1>
                        <div className="cards invisible">

                            <div id="html">

                                <Card className="cardsItem" backImg={legal} title="Legally" tools="Next.js" link="https://legally-three.vercel.app/"/>
                                <Card className="cardsItem extraitem"  backImg={vortex} title="Vortex 360" tools="React.js" link="https://enchanting-swan-8e8d4b.netlify.app/" />
                                <Card className="cardsItem extraitem"   backImg={shoe} title="E-Store" tools="Vanilla js" link="https://shoe-store-six-puce.vercel.app/" />

                            </div>

                            <h3 id="more" onClick={toggleProjectLayover}>More...</h3>
                        </div>
                    </div>
                </div>

                <div id="contact" ref={contactRef}>
                    <div className="cover" style={{ width: coverWidth }}></div>
                    <div className=""></div>
                    <h1>Contact Us</h1>
                    <Contact />
                </div>

                {/* <div id="extra" ref={extraRef}>
                    <h1>Extra info</h1>
                </div> */}

                <Tiptool description="Having trouble? you can always connect via email" />
                <Footer/>
            </main>
            {showProjectLayover && <ProjectLayover onClose={toggleProjectLayover} />} {/* Render ProjectLayover conditionally */}
        </>
    );
};

export default Landing;
