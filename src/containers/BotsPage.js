import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botsData: [],
    botArmy: []
  }

 componentDidMount() {
   fetch(botsURL)
   .then(response => response.json())
   .then(parsedData => this.setState({botsData: parsedData}))
 }

 setBotArmy = (botObj) => {
   let army = this.state.botArmy
   if (!army.includes(botObj)) {
     this.setState({botArmy: [...army, botObj]})
   }
 }

 delistBotArmy = (botObj) => {
   let army = this.state.botArmy
   let botIndex = army.findIndex(bot => bot === botObj)
   army.splice(botIndex, 1)
   this.setState({botArmy: army})
 }

  render() {
    return (
      <div>

        <YourBotArmy
          botArmy={this.state.botArmy}
          setBotArmy={this.delistBotArmy}
        />

        <BotCollection
          botsData={this.state.botsData}
          setBotArmy={this.setBotArmy}
        />

      </div>
    );
  }

}

export default BotsPage;
