import React, {Component} from "react";

class classClick extends Component{
    classHandler(){
        console.log("object clicked")
    }
    render() {
        return (
        <div>
            <button onClick={this.classHandler}> Click me!</button>
        </div>
        )
    }
}

export default classClick;