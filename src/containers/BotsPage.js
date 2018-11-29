import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: []
  }


  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({allBots: data.map(bot=> ({...bot, selected: false}))}))
  }

  handleSelectBot = (id) => {
    console.log('in handleSelectBot',id);
    const newBots = this.state.allBots.map(bot => {
      if (bot.id === id && bot.selected === false) {
        return {...bot, selected: true}
      } else if (bot.id === id && bot.selected === true) {
        return {...bot, selected: false}
      } else {
        return bot
      }
    })
    this.setState({allBots: newBots}, ()=>console.log(this.state))
  } // end handleSelectBot fn

  selectedBotsToDisplay() {
    return this.state.allBots.filter(bot=> bot.selected === true)
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.selectedBotsToDisplay()} handleSelectBot={this.handleSelectBot}/>
        <BotCollection bots={this.state.allBots} handleSelectBot={this.handleSelectBot}/>

      </div>
    );
  }

}

export default BotsPage;
