import React from "react";

function ChildComponent(props){

            return (
                <button onClick={()=>props.greetHandler()}>parent component</button>
            )

}

export default ChildComponent;