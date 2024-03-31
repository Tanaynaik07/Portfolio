import React from "react";
import Card from "../components/Card";
import "../components/projectlayover.css"; // Assuming you have a CSS file for styling
import robo from "../assest/robo.png";
import book from "../assest/book.png";
import todo from "../assest/todo.png";
import soon from "../assest/soon.png";
import legal from "../assest/legal.jpeg";
import vortex from "../assest/Vortex_360_logo.png";
import shoe from "../assest/shoe.jpg";

const ProjectLayover = ({ onClose }) => {
    return (
        <div className="project-layover">
            <div className="project-grid">
                {/* Example cards */}
                <Card className="cardsItem" backImg={legal} title="Legally" tools="Next.js" />
                <Card className="cardsItem" backImg={vortex} title="Vortex 360" tools="React.js" />
                <Card className="cardsItem" backImg={shoe} title="E-Store" tools="Vanilla js" />
                <Card backImg={robo} title="Robowars" tools="Vanilla js" />
                <Card backImg={book} title="Writing" tools="Vanilla js" />
                <Card backImg={todo} title="Todo" tools="Vanilla js" />

                {/* Add more cards as needed */}
            </div>
            <button onClick={onClose} id="back-btn">Back</button>


        </div>
    );
};

export default ProjectLayover;
