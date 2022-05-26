import React, {Component} from "react"

//Dynamic functional component
const Person = props => {
  //inside jsx, write javascript code inside {}
  return(
    <div>
      <h4>{props.children}</h4>
      <h3>Hi, I am {props.name} and I am {props.age} years old.</h3>
    </div>
  )
}

//Dynamic class component
// class Person extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div>
//         <h4>{this.props.children}</h4>
//         <h3>Hi, I am {this.props.name} and I am {this.props.age} years old.</h3>
//       </div>
//     )
//   }
// }

export default Person