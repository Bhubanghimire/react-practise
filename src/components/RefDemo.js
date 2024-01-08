import React,{ Component } from "react";
import app from "../App";

class RefDemo extends Component{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandle=()=>{
        alert(this.inputRef.current.value)
    }
    componentDidMount() {
        this.inputRef.current.focus();
        console.log("mount bhyo")
    }

    render(){

        return <div>
            <input ref={this.inputRef}></input>
            <button onClick={this.clickHandle}>click</button>
        </div>
    }
}

export default RefDemo;