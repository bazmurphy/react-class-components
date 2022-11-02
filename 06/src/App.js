import React from "react";

// FUNCTION COMPONENT

function App() {
  const [goOut, setGoOut] = React.useState("Yes")
      
  function toggleGoOut() {
      setGoOut(prevState => {
          return prevState === "Yes" ? "No" : "Yes"
      })
  }

  return (
      <div className="state">
          <h1 className="state--title">Should I go out tonight?</h1>
          <div className="state--value" onClick={toggleGoOut}>
              <h1>{goOut}</h1>
          </div>
      </div>
  )
}

// CLASS COMPONENT

class App extends React.Component {
   
  state = {
      goOut: "Yes"
  }
  
  toggleGoOut = () => {
      this.setState(prevState => {
          return {
            goOut: prevState.goOut === "Yes" ? "No" : "Yes"
          }
      })
  }
  
  render() {
      return (
          <div className="state">
              <h1 className="state--title">Should I go out tonight?</h1>
              <div className="state--value" onClick={this.toggleGoOut}>
                  <h1>{this.state.goOut}</h1>
              </div>
          </div>
      )
  }
}

export default App;