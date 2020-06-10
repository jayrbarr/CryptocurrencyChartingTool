import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: []
    }
  }

  render() {
    return (
      <div>This is working!</div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));