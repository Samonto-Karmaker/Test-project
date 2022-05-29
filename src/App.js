import { Component } from 'react';
import './App.css';
import Book from './Components/Book';
import {bookList} from "./assets/data"

//Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );
// }

//Class Component
class App extends Component{

  userChoice = [undefined, undefined]
  count = 3

  //State: a property of class components.
  //Initilizing class properties outside of a constructor is a ES6+ feature.
  state = {
    books: bookList,
    showBooks: true
  }

  //While calling this method in inside the JSX code, don't use (). 
  //Otherwise, the method will be called without clicking the button.
  toggleBookList = () =>{
    this.setState({
      showBooks: !this.state.showBooks
    })
  }

  addBookName = (event) => {
    this.userChoice[0] = event.target.value
  }

  addWriterName = (event) => {
    this.userChoice[1] = event.target.value
  }

  deleteBook = (index) => {
    let books = [...this.state.books]
    books.splice(index, 1)
    //don't try to change the state directly.
    this.setState({
      books: books
    })
  }

  addBook = (name, writer) => {

    if(name === undefined || writer === undefined){
      return
    }

    let books = [...this.state.books]

    let temp = {
      id: this.count,
      name: name,
      writer: writer
    }

    this.count++

    books.push(temp)
    this.setState({
      books: books
    })

  }

  render(){

    let bookCom
    if(this.state.showBooks){
      bookCom = this.state.books.map((item, index) => {
        return(
          <Book 
          name = {item.name} 
          writer = {item.writer} 
          key = {item.id} 
          delete = {() => this.deleteBook(index)}/>
        )
      })
    }

    return (
      <div className="App">
        <h1>Book List:</h1>
        <div>
          <button
          className="Button"
          onClick={this.toggleBookList}>Toggle Book List</button>
        </div>
        <div>
          <p>Add book name:</p>
          <input type="text" onChange={this.addBookName}/>
        </div>
        <div>
          <p>Add Writer name:</p>
          <input type="text" onChange={this.addWriterName}/>
        </div>
        <div>
          <button 
          className="Button" 
          onClick={() => this.addBook(this.userChoice[0], this.userChoice[1])}>
            Add Book
          </button>
        </div>
        <div className="com">
          {bookCom}
        </div>
      </div>
    );
  }
}

export default App;
