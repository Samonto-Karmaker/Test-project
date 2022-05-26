import { Component } from 'react';
import './App.css';
import Book from './Components/Book';

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

  userChoice = ["User choice", "Unknown"]

  //State: a property of class components.
  //Initilizing class properties outside of a constructor is a ES6+ feature.
  state = {
    books: [
      {name: "How Google Works", writer: "Eric and Johnathan"},
      {name: "Rich Dad Poor Dad", writer: "Robert"},
      {name: "Sultana's Dream", writer: "Rokeya"},
      {name: this.userChoice[0], writer: this.userChoice[1]}
    ]
  }

  //While calling this method in inside the JSX code, don't use (). 
  //Otherwise, the method will be called without clicking the button.
  showEnglishOnly = (bookName, author) => {
    //don't try to change the state directly.
    this.setState(
      {
        books: [
          {name: "How Google Works", writer: "Eric and Johnathan"},
          {name: "Rich Dad Poor Dad", writer: "Robert"},
          {name: bookName, writer: author},
          {name: this.userChoice[0], writer: this.userChoice[1]}
        ]
      }
    )
  }

  addBookName = (event) => {
    this.userChoice[0] = event.target.value
    this.setState(
      {
        books: [
          {name: this.state.books[0].name, writer: this.state.books[0].writer},
          {name: this.state.books[1].name, writer: this.state.books[1].writer},
          {name: this.state.books[2].name, writer: this.state.books[2].writer},
          {name: this.userChoice[0], writer: this.userChoice[1]}
        ]
      }
    )
  }

  addWritekName = (event) => {
    this.userChoice[1] = event.target.value
    this.setState(
      {
        books: [
          {name: this.state.books[0].name, writer: this.state.books[0].writer},
          {name: this.state.books[1].name, writer: this.state.books[1].writer},
          {name: this.state.books[2].name, writer: this.state.books[2].writer},
          {name: this.userChoice[0], writer: this.userChoice[1]}
        ]
      }
    )
  }

  render(){
    return (
      <div className="App">
        <h1>Book List:</h1>
        <div>
          <button onClick={() => this.showEnglishOnly("Freakonomics", "Steven and Stephen")}>
            Show only the info of the books written by native English Speakers
          </button>
        </div>
        <div>
          <p>Add book name:</p>
          <input type="text" onChange={this.addBookName}/>
        </div>
        <div>
          <p>Add Writer name:</p>
          <input type="text" onChange={this.addWritekName}/>
        </div>
        <div className="com">
          <Book name = {this.state.books[0].name} 
                writer = {this.state.books[0].writer}>
          </Book>
          <Book name = {this.state.books[1].name} 
                writer = {this.state.books[1].writer}>
          </Book>
          <Book name = {this.state.books[2].name} 
                writer = {this.state.books[2].writer} 
                change = {() => this.showEnglishOnly("The Alchemist", "Paulo")}>
          </Book>
          <Book name = {this.state.books[3].name} 
                writer = {this.state.books[3].writer}>
          </Book>
        </div>
      </div>
    );
  }
}

export default App;
