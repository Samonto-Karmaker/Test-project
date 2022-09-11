import { Component } from 'react';
import './App.css';
import Book from './Components/Book';
import {bookList} from "./assets/data"
import AddBook from './Components/AddBook';
import {Route, Routes, NavLink} from 'react-router-dom'

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
    books: bookList
  }

  //While calling this method in inside the JSX code, don't use (). 
  //Otherwise, the method will be called without clicking the button.

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

    const bookCom = this.state.books.map((item, index) => {
      return(
        <Book 
        name = {item.name} 
        writer = {item.writer} 
        key = {item.id} 
        delete = {() => this.deleteBook(index)}/>
      )
    })

    return (
      <div className="App">
        <div>
          <nav className="nav_bar">
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/add_book">Add Book</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="com">
          <Routes>
            <Route path='/' exact element = {bookCom}/>
            <Route path='/add_book' exact element = {<AddBook />}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
