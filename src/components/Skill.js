import React from "react";
import Tiptool from "./Tiptool";
import "../components/skill.css";

const Skill=(props)=>{

    return(
        // <li>Programming Languages: Java, Python, C++</li>
        <div className="skill">

        
        <Tiptool title={props.skillname} description={props.info}/>
        </div>
    )
}

export default Skill