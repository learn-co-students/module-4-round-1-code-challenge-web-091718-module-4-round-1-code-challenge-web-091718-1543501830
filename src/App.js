import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(botData => this.setState({ bots: botData }));
    }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
