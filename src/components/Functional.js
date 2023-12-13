import React from "react";

const Greet = ({name, lastName, children}) =>{
    // or use props in param and inside body: const {name, lastName} = props
   return(
      <div>
       <h1>
          Hello World {name} {lastName}
       </h1>
      {children}
      </div>

   )
}

export default Greet;