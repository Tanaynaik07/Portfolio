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
                <Card className="cardsItem" backImg={legal} title="Legally" tools="Next.js" link="https://legally-three.vercel.app/" />
                <Card className="cardsItem extraitem" backImg={vortex} title="Vortex 360" tools="React.js" link="https://enchanting-swan-8e8d4b.netlify.app/" />
                <Card className="cardsItem extraitem" backImg={shoe} title="E-Store" tools="Vanilla js" link="shoe-store-six-puce.vercel.app" />

                <Card backImg={robo} title="Robowars" tools="Vanilla js" link="https://robo-war-clone.vercel.app/"/>
                <Card backImg={book} title="Writing" tools="Vanilla js" link="https://writing-rho.vercel.app/" />
                <Card backImg={todo} title="Todo" tools="Vanilla js" link="https://todo-eight-mu.vercel.app/" />

                {/* Add more cards as needed */}
            </div>
            <button onClick={onClose} id="back-btn">Back</button>


        </div>
    );
};

export default ProjectLayover;
