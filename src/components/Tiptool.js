import React from "react";
import "../components/tiptool.css";

const Tiptool = (props) => {

    return (

        <div class="item-hints">
            <div class="hint" data-position="4">
                <span class="hint-radius"></span>
                <span class="hint-dot">{props.title}</span>
                <div class="hint-content do--split-children">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default Tiptool;