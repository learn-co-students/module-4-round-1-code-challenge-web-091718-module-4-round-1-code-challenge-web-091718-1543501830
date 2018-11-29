import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  state = {
    allBots: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const bots = data.map(botObj => ({...botObj, enlisted:false}))
        this.setState({allBots: bots})
      })
  }

  clickHandler = id => {
    let foundBot = this.state.allBots.find(bot => bot.id === id)

    if (foundBot.enlisted === false) {
      this.setState(prevState => {
        const botsUpdated = prevState.allBots.map(bot => {
          if (bot.id === id) {
            return {...bot, enlisted: true}
          } else {
            return bot
          }
        })
        return {allBots: botsUpdated}
      })
    } else {
      this.setState(prevState => {
        const botsUpdated = prevState.allBots.map(bot => {
          if (bot.id === id) {
            return {...bot, enlisted: false}
          } else {
            return bot
          }
        })
        return {allBots: botsUpdated}
      })
    }
  }

  filterBots = () => {
    return this.state.allBots.filter(bot => bot.enlisted === true)
  }


  render() {
    return (
      <div>
        {<YourBotArmy
          bots={this.filterBots()}
          clickHandler={this.clickHandler}
        />}
        {<BotCollection
          bots={this.state.allBots}
          clickHandler={this.clickHandler}
        />}
      </div>
    );
  }

}

export default BotsPage;
