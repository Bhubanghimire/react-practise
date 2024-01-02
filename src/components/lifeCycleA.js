import React, {Component} from "react";

class LifeCycleA extends Component{

    constructor(props) {
        super(props)
        console.log("Lifecycle A constructor")
        this.state = {
            name:"Bhuban"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle A getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("LifeCycle A component did mount.")
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifeCYcle A shouldComponenet update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCYcle A getSnapshotBeforeUpdate")
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component A did update")

    }
    changeState = () => {
        this.setState(
            {
                name:"ghimire"
            }
        )
    }

    render() {
        console.log("Lifecycle A render method.")
        return(
            <div>
            <div>this is life cycle A.-- {this.state.name}</div>
                <button onClick={this.changeState}>state change</button>
        </div>
        )

    }
}

export default LifeCycleA
