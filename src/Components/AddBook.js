import React from "react";
import App from "../App"
import "../StyleSheets/AddBook.css"

const AddBook = () =>{
    return(
        <div>
            <h1>Add New Book</h1>
            <div>
            <p>Add book name:</p>
            <input type="text" onChange={App.addBookName}/>
            </div>
            <div>
            <p>Add Writer name:</p>
            <input type="text" onChange={App.addWriterName}/>
            </div>
            <div>
            <button 
            className="Button" 
            onClick={() => this.addBook(App.userChoice[0], App.userChoice[1])}>
                Add Book
            </button>
            </div>
        </div>
        
    )
}

export default AddBook