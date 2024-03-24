import React from "react";
import Skill from "./Skill";
import "../components/skills.css";
const Skills = () => {

    let skills=["Programming Language","Web Development","Frameworks","Version Control","Development Tools","Problem Solving"];
    let pl=["Java","Python","C","C++","C#"];
    let wd=["HTML","CSS","Javascript"];
    let fw=["React.js","Next.js","Node.js"];
    let vc=["Git"];
    let ps=["Data Structures and algorithm"];
    let sd=["Visual Studio"];
    return (
        <>
            <h2>Skills</h2>
            
                
            {/* <div className="abc">
            <h3>{skills[0]}</h3>
            <div className="skillset">

                <Skill skillname={pl[0]} info="I love python" />
                <Skill skillname={pl[1]} info="I love python" />
                <Skill skillname={pl[2]} info="I love python" />
                <Skill skillname={pl[3]} info="I love python" />
            </div>

            
            </div>

            <div className="abc">
            <h3>{skills[1]}</h3>
            <div className="skillset">

                <Skill skillname={wd[0]} info="I love python" />
                <Skill skillname={wd[1]} info="I love python" />
                <Skill skillname={wd[2]} info="I love python" />
                 
            </div>

            
            </div>

            <div className="abc">
            <h3>{skills[2]}</h3>
            <div className="skillset">

                <Skill skillname={fw[0]} info="I love python" />
                <Skill skillname={fw[1]} info="I love python" />
                <Skill skillname={fw[2]} info="I love python" />
                 
            </div>

            
            </div>

            <div className="abc">
            <h3>{skills[3]}</h3>
            <div className="skillset">

                <Skill skillname={vc[0]} info="I love python" />
                
                 
            </div>

            
            </div>

            <div className="abc">
            <h3>{skills[4]}</h3>
            <div className="skillset">

                <Skill skillname={sd[0]} info="I love python" />
                
            </div>

            
            </div>

            <div className="abc">
            <h3>{skills[5]}</h3>
            <div className="skillset">

                <Skill skillname={ps[0]} info="I love python" />
              
                 
            </div>

            
            </div> */}

           
                <ul><li>Programming Languages: Java, Python, C++</li>
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
        </>
    )
}

export default Skills;