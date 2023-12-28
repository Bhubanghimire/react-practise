import React from "react";
import './myStyle.css';


function Stylesheet(props) {
    let primary = props.primary ? 'primary' : ""
    return (
        <div>
            <h2 className={`${primary} font-xl`}> heading color</h2>
        </div>
    )
}

export default Stylesheet