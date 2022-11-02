import './App.css';
import React from "react";

// FUNCTION COMPONENT

// function App() {
//   return (
//     <h1>Function Component</h1>
//   );
// }

// CLASS COMPONENT

// class App extends React.Component {
//   render() {
//     return (
//       <h1>Class Component</h1>
//     )
//   }
// }

// FUNCTION COMPONENT WITH PROPS

// function App(props) {
//   return (
//     <h1>{props.type} Component</h1>
//   );
// }

// CLASS COMPONENT WITH PROPS

class App extends React.Component {
  render() {
    return (
      <h1>{this.props.type} Component</h1>
    )
  }
}

export default App;