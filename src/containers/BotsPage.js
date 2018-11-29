import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: [],
    selectedBot: null
  }

  componentDidMount(){
    fetch(API)
    .then(r=>r.json())
    .then(bots => {
      console.log(`Fetched ${bots.length} Bots`);
      this.setState({ bots })
    })
  }


  addToArmy = (bot) => {
    const newArmy = this.state.army
    if(newArmy.includes(bot)){
      console.log('Cant Add Copy')
    } else {
      newArmy.push(bot)
      this.setState({army: newArmy})
    }
  }

  removeFromArmy = (bot) => {
    const newArmy = this.state.army.filter(abot => bot !== abot)
    this.setState({army: newArmy})
  }

  makeSelected = (bot) => {
    console.log('selected')
    this.setState({selectedBot: bot})
  }

  removeSelected = () => {
    this.setState({selectedBot: null})
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} onClick={this.removeFromArmy}/>
        {!!this.state.selectedBot ?
          <BotSpecs bot={this.state.selectedBot} onBack={this.removeSelected} onClick={this.addToArmy}/>
          :
          <BotCollection bots={this.state.bots} onClick={this.makeSelected}/>
        }

        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
