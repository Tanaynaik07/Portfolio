import React from "react";
import "../components/card.css";

const Card = (props) => {
    return (
        <div id="holder">
            <div class="card">
                <div class="card-img"></div>
                <div class="card-info">
                    <p class="text-title">Card title</p>
                    <p class="text-body">Lorem Ipsum dolor sit amet</p>
                    <button class="card-button">Read More</button>
                </div>
            </div>
            <h2>Title</h2>
        </div>
    );
};
export default Card;
