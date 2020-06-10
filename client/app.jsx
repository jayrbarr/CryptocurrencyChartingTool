import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyChart from './MyChart.jsx';

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

    let chartPoints = [];
    for (let key in this.state.data.bpi) {
      chartPoints.push({x:key, y:this.state.data.bpi[key]});
    }
    const chartData = {
      datasets: [
        {
          label: "BTC",
          data: chartPoints,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
      ]
    };
    return (
      <div>
            <a href='https://www.coindesk.com/price/bitcoin' >{this.state.data.disclaimer}</a>
            <MyChart data={chartData} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
