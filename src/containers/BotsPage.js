import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlistedBots: [],
    selectedBotId: null
  }

  enlistBot = botId => {
    this.state.enlistedBots.find(bot => bot.id === botId) ? null : this.setState({enlistedBots: [this.state.bots.find(bot => bot.id === botId), ...this.state.enlistedBots]})}

  unEnlistBot = botId => this.setState({enlistedBots: this.state.enlistedBots.filter(bot => bot.id !== botId)})

  toggleEnlistBot = (botId, bool) => bool ? this.unEnlistBot(botId) : this.enlistBot(botId)

  selectBot = botId => this.setState({selectedBotId: botId}, () => console.log(this.state.selectedBotId))

  unSelectBot = () => {
    this.setState({selectedBotId: null})}

  collectionOrSpecs = () => {
    return !!this.state.selectedBotId ? <BotSpecs bot={this.state.bots.find(bot => bot.id === this.state.selectedBotId)} enlistBot={this.enlistBot} unSelectBot={this.unSelectBot}/> : <BotCollection bots={this.state.bots} toggleEnlistBot={this.toggleEnlistBot} selectBot={this.selectBot}/>}

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  render() {
    return (
      <div>
      <YourBotArmy bots={this.state.enlistedBots} toggleEnlistBot={this.toggleEnlistBot} selectBot={this.selectBot}/>
        {this.collectionOrSpecs()}
      </div>
    );
  }

}

export default BotsPage;
