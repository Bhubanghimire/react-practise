import React from "react";
const heading = {
    fontSize:'72px', //naming are same as css but camelcase instead of space
    color:'blue'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline