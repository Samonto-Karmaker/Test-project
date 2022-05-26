import React, { Component } from "react";
import "../StyleSheets/Book.css"

class Book extends Component{
    render(){
        return(
            <div className="book">
                <h3>Book Name: {this.props.name}</h3>
                <h5 onClick={this.props.change}>Writer: {this.props.writer}</h5>
            </div>
        )
    }
}

export default Book