import React, { useEffect, useRef } from "react";
import "../src/landing.css";
import sampleImg from "../src/assest/image 7.png";
import Card from "./components/Card";

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
                            divs[0].classList.add("coveraboutme");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.add("comesvisible");
                            break;
                        case "education":
                            divs = entry.target.querySelectorAll('div');

                            divs[0].classList.add("covereducation");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.add("comesvisible");
                            break;
                        case "skills":
                            divs = entry.target.querySelectorAll('div');

                            divs[0].classList.add("coverskills");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.add("comesvisible");
                            break;
                        case "projects":
                            divs = entry.target.querySelectorAll('div');

                            divs[0].classList.add("coverprojects");
                            divs[1].classList.add("coverheader", "aboutheader");
                            divs[2].classList.add("comesvisible");
                            break;
                        // case "contact":
                        //     divs = entry.target.querySelectorAll('div');

                        //     divs[0].classList.add("covercontact");
                        //     divs[1].classList.add("coverheader", "aboutheader");
                        //     divs[2].classList.add("comesvisible");
                        //     break;
                        // case "extra":
                        //     divs = entry.target.querySelectorAll('div');

                        //     divs[0].classList.add("coveraboutme");
                        //     divs[1].classList.add("coverheader", "aboutheader");
                        //     divs[2].classList.add("comesvisible");
                        //     break;
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

    return (
        <main>
            <div id="intro" ref={introRef}>
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

            <div id="aboutme" ref={aboutMeRef}>
                <div className="cover"></div>
                <div className=" "></div>
                <div id="aboutcontent">

                    <h1>About me</h1>
                    {aboutMe}
                </div>
            </div>

            <div id="education" ref={educationRef}>
                <div className="cover "></div>
                <div className=""></div>
                <h2>Education</h2>
                <div className="education-entry">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>
                        <strong>University:</strong> ABC University
                    </p>
                    <p>
                        <strong>Location:</strong> City, State
                    </p>
                    <p>
                        <strong>Dates:</strong> September
                        2019 - May 2023
                    </p>
                    <p>
                        <strong>GPA:</strong> 3.8/4.0
                    </p>
                    <p>
                        <strong>Relevant Coursework:</strong> Algorithms and Data
                        Structures, Database Management Systems, Software Engineering,
                        Computer Networks
                    </p>
                    <p>
                        <strong>Thesis:</strong> "Analysis of Machine Learning Algorithms
                        for Sentiment Analysis"
                    </p>
                </div>
                <div className="education-entry">
                    <h3>High School Diploma</h3>
                    <p>
                        <strong>School:</strong> XYZ High School
                    </p>
                    <p>
                        <strong>Location:</strong> City, State
                    </p>
                    <p>
                        <strong>Dates:</strong> September 2015 - May 2019
                    </p>
                    <p>
                        <strong>GPA:</strong> 4.0/4.0
                    </p>
                    <p>
                        <strong>Activities:</strong> President of Computer Science Club,
                        Science Fair Participant
                    </p>
                </div>
            </div>

            <div id="skills" ref={skillsRef}>
                <div className="cover "></div>
                <div className=""></div>
                <div>


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
            </div>

            <div id="projects" ref={projectsRef}>
                <div className="cover "></div>
                <div className=""></div>
                <div>

                <h1>Project</h1>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            </div>

            <div id="contact" ref={contactRef}>
                <h1>Contact Us</h1>
            </div>

            <div id="extra" ref={extraRef}>
                <h1>Extra info</h1>
            </div>
        </main>
    );
};

export default Landing;
