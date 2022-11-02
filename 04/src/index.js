import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Challenge:
// 1. Convert all 3 components to be class-based
// 2. Fix the small bug

// #1 FUNCTION COMPONENT
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

// #1 CLASS COMPONENT
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Baz" />
        <Greeting />
      </div>
    )
  }
}

// #2 FUNCTION COMPONENT
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

// #2 CLASS COMPONENT
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// #3 FUNCTION COMPONENT
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }

// #3 CLASS COMPONENT
class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}


// OLD DOM RENDER METHOD:
// ReactDOM.render(<App />, document.getElementById("root"))

// REACT 18 DOM RENDER METHOD:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);