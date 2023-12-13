import React, {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name:"bhuban"
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count+1,
        //     name:"abc"
        // }, ()=>{
        //     console.log('callback value', this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState, props) => ({
            count:prevState.count +1
        }))
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
        <div>
            <div> counter - {this.state.count} - {this.state.name} </div>
            <button onClick={()=>this.increment()}>Increment</button>
        </div>
        )
    }
}

export default Counter;