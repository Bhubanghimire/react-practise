import React from "react";
import Table from "./Table";


function FragmentDemo(){
    return (
        <React.Fragment>
            <h1>this is heading</h1>
            <p>this is paragraphs.</p>
            <Table/>
        </React.Fragment>
    )
}

export default FragmentDemo