import React, {Component} from "react";
// import ChildComponent from './ChildComponent';
import RegComp from "./RegComponent";
import PureComp from "./PureComponent";
import MemoComp from "./MemoComp";


class ParentComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:"Bhuban",
            parentName: "Parent"
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState(
                {
                    name:"Bhuban"
                }
            )
        },200)
    }

    greetParent(childName){
        alert('hello greeting')
    }
    render() {
        console.log("**parent component render**")
        return (
            <div>
                {/*<ChildComponent greetHandler = {this.greetParent} />*/}
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <MemoComp name={this.state.name} />


            </div>
        )
    }
}

export default ParentComponent;