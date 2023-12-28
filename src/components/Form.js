import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            commenet: "",
            select:""
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleComment = event =>{
        this.setState(
            {
                comment: event.target.value
            }
        )
    }

    handleSelect = event =>{
        this.setState(
            {
                select: event.target.value
            }
        )
    }

    handleSubmitButton = (event) =>{
        console.log("buttom clicked")
        alert(`${this.state.username} ${this.state.comment} ${this.state.select}`)
        event.preventDefault()
    }
    render() {
        const {username, comment, select} = this.state
        return (
            <div>
                <br/>
                <form onSubmit={this.handleSubmitButton}>

                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            value={ username }
                            onChange={ this.handleUsernameChange }
                        />
                    </div>
                    <br/>
                    <div>
                        <label> Comment </label>
                        <textarea value={comment} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <label>select option</label>
                        <select value={select} onChange={this.handleSelect}>
                            <option value=""></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;