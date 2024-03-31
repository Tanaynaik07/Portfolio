import React from "react";
import "../components/card.css";

const Card = (props) => {
    return (
        <div id="holder">
            <div class="card">
                <img class="card-img" src={props.backImg}></img>
                <div class="card-info">
                    <p class="text-title"></p>
                    <p class="text-body">{props.tools}</p>
                    <a href={props.link} target="_blank"><button class="card-button">Check it out</button></a>
                </div>
            </div>
            <h2>{props.title}</h2>
        </div>
    );
};
export default Card;
