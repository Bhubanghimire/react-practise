import React from "react";

function memoComp(){
    console.log("memo component")
    return <div>memo component</div>
}

export default React.memo(memoComp)