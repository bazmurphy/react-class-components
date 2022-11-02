import React from "react";

class App extends React.Component {

  // If you can't use class fields in your class components
  // for some reason, then you'll need to make use of the
  // class' `constructor` method to initialize your state object.
  // The first line of the constructor method should be a call
  // to `super()` like you see below, and then you can add your
  // state variable as a property attached to `this`
  
  // ONLY if you want to use props INSIDE your constructor function do you need to pass it in
  // and then you must also pass it to super

  constructor(props) {
    super(props)
    this.state = {
        goOut: "Yes"
    }
    this.toggleGoOut = this.toggleGoOut.bind(this)
  }
    
  // If you can't use arrow functions for your class methods, 
  // you'll need to make sure to `bind` them inside the constructor above.
  
  // if you are using this.setState then you will want to make sure that you BIND your method inside of your Constructor

  toggleGoOut() {
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
