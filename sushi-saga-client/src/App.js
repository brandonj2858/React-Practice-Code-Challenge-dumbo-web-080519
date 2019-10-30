import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    sushiIndex: 0,
    capital: 200
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(res => res.json())
    .then(resObj => {
      this.setState({
        sushis: resObj
      })
    })
  }

  fourSushi = () => {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    }

  moreSushi = () => {
    let prevSate = this.state.sushiIndex
    this.setState({
      sushiIndex: prevSate + 4
    })
    console.log(this.state.sushiIndex)
  }

  eatSushi = (sushi) => {
    console.log(sushi)
    this.state.capital < sushi.price ? alert("Insufficient Funds!") :
    this.setState({
      eaten: [...this.state.eaten, sushi],
      capital: this.state.capital - sushi.price
    })

  }

  render() {

    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi}  eatSushi={this.eatSushi} eaten={this.state.eaten} sushis={this.fourSushi()} />
        <Table capital={this.state.capital} />

      </div>
    );
  }
}

export default App;
