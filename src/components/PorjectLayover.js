import React from "react";
import Card from "../components/Card";
import "../components/projectlayover.css"; // Assuming you have a CSS file for styling
import robo from "../assest/robo.png";

const ProjectLayover = ({ onClose }) => {
    return (
        <div className="project-layover">
            <div className="project-grid">
                {/* Example cards */}
                <Card backImg={robo} title="Robowars" tools="Vanilla js"/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {/* Add more cards as needed */}
            </div>
            <button onClick={onClose}>Back</button>

            
        </div>
    );
};

export default ProjectLayover;
