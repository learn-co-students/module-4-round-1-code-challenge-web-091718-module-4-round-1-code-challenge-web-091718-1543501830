import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props)

    this.state={
      bots:[{id:null}],
      selectedBots:[]
    }

    this.getBots()
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(data => data.json())
    .then(bots => this.setState({bots:bots}))
  }

  addBotToArmy= (id) =>{
    console.log(`clicked to add ${id}`)
    let newSelectedBots = this.state.selectedBots
    newSelectedBots.unshift(id)
    this.setState({selectedBots:newSelectedBots})
  }

  getBotById = (id) =>{
    return this.state.bots.find(bot => bot.id === id)
  }

  removeBotFromArmy = (id) =>{
    let newSelectedBots = this.state.selectedBots.filter(botId => botId != id)
    this.setState({selectedBots:newSelectedBots})
    console.log(`clicked to remove ${id}`)
  }

  getBotsNotInArmy = () => {
    return this.state.bots.filter(bot => typeof this.state.selectedBots.find(botId => botId === bot.id) == 'undefined')
  }

  render() {
    return (
      <div>
        <YourBotArmy getBotById = {this.getBotById} selectedBots={this.state.selectedBots} onBotClick={this.removeBotFromArmy}/>
        <BotCollection getBotById = {this.getBotById} getBotsNotInArmy={this.getBotsNotInArmy} bots = {this.state.bots} onBotClick = {this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
