import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('/btc')
  .then(response => response.json())
  .then(data => this.setState({data}));
  }

  render() {
    return (
    <div>{this.state.data.disclaimer}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
