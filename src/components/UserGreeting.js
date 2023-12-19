import React, {Component} from "react";

class UserGreeting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:true
        }
    }
    render() {
        // this is type 1 for render in if contion
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div> Welcome Guest</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div> Welcome Bhuban</div>
        //         </div>
        //     )
        // }

        //method :2
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div> Welcome Bhuban </div>
        // }else {
        //     message = <div> welcome guest </div>
        // }
        // return <div> { message } </div>

        // method 3
        return (
            this.state.isLoggedIn? <div> Welcome bhuban </div> : <div> Welcome Guest</div>
        )


    }
}

export default UserGreeting;