import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
// BotPage is the highest component below App, and serves as the main container for all of the pieces of the page.
const botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
const fetchBots = fetch(botsURL).then(response => response.json())

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [], // all of the bots
    army: [], // the user's personal bot army, these are indexes pointing to the master bot array
    selectedBot: {},
    viewMode: false

  }

  componentDidMount() {
    fetchBots.then(botData => {
      return botData.map(bot => {
        return {...bot, enlisted: false}
      })
    }).then(friendlyBotData => {
      this.setState({bots: friendlyBotData})
    })
  }

  getBotByBotId = (botId) => {
    return this.state.bots.find(bot => bot.id === botId)
  }

  enlistBotToArmy = (botId) => {
    let updatedBots = this.updatedBotsOnEnlistment(this.state.bots, botId)
    this.updateStateOfBots(updatedBots)
    this.addBotToArmy(botId)
    this.alterViewMode()
  }

  deEnlistBotFromArmy = (botId) => {
    let updatedBots = this.updatedBotsOnRemoval(this.state.bots, botId)
    this.updateStateOfBots(updatedBots)
    this.removeBotFromArmy(botId)
  }

  addBotToArmy = (botId) => {
    if (this.state.army.includes(botId)) {
      alert(`${this.getBotByBotId(botId).name} is already in your army!`)
    } else {
      let updatedArmy = [...this.state.army]
      updatedArmy.push(botId)
      this.setState({army: updatedArmy})
    }
  }

  removeBotFromArmy = (botId) => {
    let updatedArmy = this.state.army.filter(id => botId === id)
    this.setState({army: updatedArmy})
  }

  enlistedBots = () => {
    return this.state.bots.filter(bot => !bot.enlisted)
  }

  usersBots = () => {
    return this.state.bots.filter(bot => bot.enlisted)
  }

  updatedBotsOnEnlistment = (bots, botId) => {
    return bots.map(bot => {
      if (bot.id === botId) {
        bot.enlisted = true
        return {...bot, enlisted:true}
      } else {
        return bot
      }
    })
  }

  updatedBotsOnRemoval = (bots, botId) => {
    return bots.map(bot => {
      if (bot.id === botId) {
        bot.enlisted = true
        return {...bot, enlisted:false}
      } else {
        return bot
      }
    })
  }

  updateStateOfBots = (updatedBots) => {
    this.setState({bots: updatedBots})
  }

  alterViewMode = () => {
    let opposite = !this.state.viewMode
    this.setState({viewMode: opposite})
  }

  selectBot = (botId) => {
    let bot = this.getBotByBotId(botId)
    this.setState({selectedBot: bot})
  }
  render() {
    return (
      <div>
        <YourBotArmy
          army={this.usersBots()}
          deEnlistBotFromArmy={this.deEnlistBotFromArmy}
          alterViewMode={this.alterViewMode}/>
        {this.state.viewMode ? <BotSpecs viewMode={this.state.viewMode}
        bot={this.state.selectedBot}
        alterViewMode={this.alterViewMode}
        enlistBotToArmy={this.enlistBotToArmy} /> : <BotCollection
          bots={this.enlistedBots()}
          enlistBotToArmy={this.enlistBotToArmy}
          viewMode={this.state.viewMode}
          alterViewMode={this.alterViewMode}
          selectBot={this.selectBot} />}
      </div>
    );
  }

}

export default BotsPage;
