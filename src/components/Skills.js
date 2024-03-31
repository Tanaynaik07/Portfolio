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

           
                <ul><li>Programming Languages: Python, C, C++, C#, Java, JavaScript etc.</li>
                <li> Designing Tools: Figma, Canva, Blender  </li>
                <li> Frameworks/Libraries: React.js, Node.js</li>
                <li>Web Development: HTML, CSS, JavaScript, Express.js</li>
                <li>Version Control: Git</li>
                <li>Software Development Tools: Visual Studio Code </li>
                 
                <li>Problem Solving: Technical Analysis, Code Debugging, Analytical thinking, Functionality implementation</li>
                
            </ul> 
        </>
    )
}

export default Skills;