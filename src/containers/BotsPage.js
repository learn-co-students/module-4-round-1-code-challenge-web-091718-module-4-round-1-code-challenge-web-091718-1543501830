import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props)

    this.state={
      bots:[{id:null}],
      selectedBots:[],
      inspectingBot:false,
      inspectedBot:null
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

  inspectBot = (id) => {
    console.log(`inspecting Bot ${id}`)
    this.setState({inspectedBot:id,
      inspectingBot:true
    })
  }

  cancelInspection = () =>{
    this.setState({
      inspectedBot:null,
      inspectingBot:false
    })
  }


  getBotsNotInArmy = () => {
    return this.state.bots.filter(bot => typeof this.state.selectedBots.find(botId => botId === bot.id) == 'undefined')
  }

  render() {
    return (
      <div>
        <YourBotArmy getBotById = {this.getBotById} selectedBots={this.state.selectedBots} onBotClick={this.removeBotFromArmy}/>
        {this.state.inspectingBot ? <BotSpecs addBotToArmy={this.addBotToArmy} cancelInspection={this.cancelInspection} bot ={this.getBotById(this.state.inspectedBot)}/> : <BotCollection inspectBot={this.inspectBot} getBotById = {this.getBotById} getBotsNotInArmy={this.getBotsNotInArmy} bots = {this.state.bots} onBotClick = {this.addBotToArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
