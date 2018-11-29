import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlistedBots: []
  }

  enlistBot = botId => {
    this.state.enlistedBots.find(bot => bot.id === botId) ? null : this.setState({enlistedBots: [this.state.bots.find(bot => bot.id === botId), ...this.state.enlistedBots]})}

  unEnlistBot = botId => this.setState({enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== botId)})

  toggleEnlistBot = (botId, bool) => bool ? this.unEnlistBot(botId) : this.enlistBot(botId)

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  render() {
    return (
      <div>
      <YourBotArmy bots={this.state.enlistedBots} toggleEnlistBot={this.toggleEnlistBot} />
        <BotCollection bots={this.state.bots} toggleEnlistBot={this.toggleEnlistBot} />
      </div>
    );
  }

}

export default BotsPage;
