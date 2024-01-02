import React, {Component} from "react";

class LifecycleB extends Component{

    constructor(props) {
        super(props)
        console.log("Lifecycle B constructor")
        this.state = {
            name:"Bhuban"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle B getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("Lifecycle B component did mount.")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifeCycle B shouldComponenet update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle B getSnapshotBeforeUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component B did update")
    }

    render() {
        console.log("Lifecycle B render method.")
        return <div> this is life cycle B. </div>

    }
}

export default LifecycleB
