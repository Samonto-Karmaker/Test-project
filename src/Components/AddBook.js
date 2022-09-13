import React, {Component} from "react";
import "../StyleSheets/AddBook.css"

class AddBook extends Component{
    state = {
        bookName: "",
        writer: ""
    }

    handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        //Prevents from reload after an event
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Add New Book</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Book Name: </label>
                    <br/>
                    <input type = "text" name = "bookName" value = {this.state.bookName} onChange = {event => this.handleInputChange(event)} />
                    <br/>
                    <label>Writer: </label>
                    <br/>
                    <input type = "text" name = "writer" value = {this.state.writer} onChange = {event => this.handleInputChange(event)} />
                    <br/>
                    <input type = "submit" value = "Submit" className="Button"/>
                </form>
            </div>
        )
    }
}

export default AddBook