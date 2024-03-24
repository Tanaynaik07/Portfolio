// Projects.js
import React from "react";
import Card from "./Card";
import samplebg from "../assest/background.jpeg";

const Projects = () => {
    return (
        <div id="projects">
            <div className="cover "></div>
            <div className="">
                <div className="invisible">
                    <h1>Projects</h1>
                    <div className="cards">
                        <h2>Html Css and Js</h2>
                        <div id="html">
                            {/* Your HTML, CSS, and JavaScript projects go here */}
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                        </div>

                        <h2>React js</h2>
                        <div id="react">
                            {/* Your React projects go here */}
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                        </div>

                        <h2>Next js</h2>
                        <div id="next">
                            {/* Your Next.js projects go here */}
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                            <Card className="cardsItem" backImg={samplebg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
