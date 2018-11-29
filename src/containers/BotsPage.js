import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: [],
    page: true,
    currentBot: null
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

  pageHandler = (currentId) => {
    const currentBot = this.state.robots.find(robot=>robot.id===currentId)
      this.setState({
        currentBot: currentBot,
        page: !this.state.page
      })

  }

  displayHandler = () => {
    if (this.state.page===true){
      return <BotCollection pageHandler={this.pageHandler} robots={this.state.robots} />
    }
      return <BotSpecs currentBot={this.state.currentBot} recruitBot={this.recruitBot} pageHandler={this.pageHandler} />
  }

  render() {
    return (
      <div>
        <YourBotArmy pageHandler={this.pageHandler} robots={this.state.robots} />
        {this.displayHandler()}
      </div>
    );
  }

}

export default BotsPage;
