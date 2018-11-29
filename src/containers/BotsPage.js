import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  addToArmy = (bot) => {
    // console.log('Adding To Army')
    // console.log(bot)
    const newArmy = this.state.army
    if(newArmy.includes(bot)){
      console.log('Cant Add Copy')
    } else {
      newArmy.push(bot)
      this.setState({army: newArmy})
    }

  }

  removeFromArmy = (bot) => {
    // console.log('Removin')
    // console.log(bot)
    const newArmy = this.state.army.filter(abot => bot !== abot)
    // console.log(newArmy)
    this.setState({army: newArmy})
  }

  componentDidMount(){
    fetch(API)
    .then(r=>r.json())
    .then(bots => {
      console.log(`Fetched ${bots.length} Bots`);
      this.setState({ bots })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} onClick={this.removeFromArmy}/>
        <BotCollection bots={this.state.bots} onClick={this.addToArmy}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
