import React from "react";

const Hello = () =>{
    // return (
    //     // this is using jsx
    //     <div>
    //         <h1> hello bhuban from jsx </h1>
    //     </div>
    // )
    //this is withour jsx

    return React.createElement(
        'div',
        {"id":"hello", "className":"testClass"},
        React.createElement('h1', null,"Hello bhuban")
    )
}

export default Hello;