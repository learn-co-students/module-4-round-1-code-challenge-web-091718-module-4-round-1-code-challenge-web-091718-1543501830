import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botsData: [],
    botArmy: [],
    clickedBot: null
  }

 componentDidMount() {
   fetch(botsURL)
   .then(response => response.json())
   .then(parsedData => this.setState({botsData: parsedData}))
 }

 setClickedBot = (botObj) => {
   this.setState({clickedBot: botObj})
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

 goBack = () => {
   this.setState({clickedBot: null})
 }

 renderCollectionOrSpec = () => {
   if (!this.state.clickedBot) {
     return(
       <BotCollection
         botsData={this.state.botsData}
         setClickedBot={this.setClickedBot}
       />
     )
   } else {
     return(
       <BotSpecs
        bot={this.state.clickedBot}
        setBotArmy={this.setBotArmy}
        goBack={this.goBack}
       />
     )
   }
 }

  render() {
    return (
      <div>

        <YourBotArmy
          botArmy={this.state.botArmy}
          setBotArmy={this.delistBotArmy}
          setClickedBot={this.setClickedBot}
        />

        {this.renderCollectionOrSpec()}

      </div>
    );
  }

}

export default BotsPage;
