import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: [],
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(robots => this.setState({
      robots: robots.map(robot=>{
        robot.recruited = false
        return robot
      })
    }))
  }

  recruitBot = (currentId) => {
    this.setState({robots: this.state.robots.map(robot=>{
        if (currentId === robot.id){
          robot.recruited = !robot.recruited
          return robot
        } else {
          return robot
        }
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy robots={this.state.robots} />
        <BotCollection recruitBot={this.recruitBot} robots={this.state.robots} />
      </div>
    );
  }

}

export default BotsPage;
