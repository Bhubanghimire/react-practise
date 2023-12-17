import React, {Component} from "react";
import ChildComponent from './ChildComponent';


class ParentComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            parentName: "Parent"
        }

    }
    greetParent(childName){
        alert('hello greeting')
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;