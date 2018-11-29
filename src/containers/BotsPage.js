import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  state = {
    allBots: [],
    selectedBotId: null,
    displayDetails: false
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const bots = data.map(botObj => ({...botObj, enlisted:false}))
        this.setState({allBots: bots})
      })
  }


  filterBots = () => {
    return this.state.allBots.filter(bot => bot.enlisted === true)
  }


  handleEnlistClick = (id) => {
    this.setState((prevState) => {
      const updatedBots = prevState.allBots.map(bot =>{
        if (bot.id === id) {
          return {...bot, enlisted: true}
        } else {
          return bot
        }
      })
      return {allBots: updatedBots, displayDetails: false}
    })
  }


  handleCardClick = (id) => {
    let foundBot = this.state.allBots.find(bot => bot.id === id)

    if (foundBot.enlisted) {
      this.setState(prevState => {
        return {allBots: prevState.allBots.map(bot =>{
          if (bot.id === id) {
            return {...bot, enlisted: false}
          } else {
            return bot
          }
        })}
      })
    } else {
      this.setState({selectedBotId: id, displayDetails: true})
    }
  }

  handleGoBackClick = () => {
    this.setState({displayDetails: false})
  }


  render() {
    return (
      <div>
        {<YourBotArmy
          bots={this.filterBots()}
          handleCardClick={this.handleCardClick}
        />}
        {<BotCollection
          bots={this.state.allBots}
          selectedBotId={this.state.selectedBotId}
          handleEnlistClick={this.handleEnlistClick}
          handleCardClick={this.handleCardClick}
          displayDetails={this.state.displayDetails}
          handleGoBackClick={this.handleGoBackClick}
        />}
      </div>
    );
  }

}

export default BotsPage;
