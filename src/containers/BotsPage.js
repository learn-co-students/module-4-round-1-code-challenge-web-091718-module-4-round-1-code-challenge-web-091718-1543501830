import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotFilter from './BotFilter'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    ogBots: [],
    backupBots: [],
    bots: [],
    army: [],
    selectedFilter: 'none',
    selectedBot: null
  }

  componentDidMount(){
    fetch(API)
    .then(r=>r.json())
    .then(bots => {
      console.log(`Fetched ${bots.length} Bots`);
      this.setState({ bots: bots, backupBots: bots})
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

  sortBots = (val) => {
    // console.log(this.state.ogBots[0])
    if (val === 'H') {
      console.log('health')
      if(this.state.selectedFilter === 'health'){
        // console.log(this.state.backupBots[0])
        // console.log('undo')
        let newBots = this.state.backupBots.slice();
        this.setState({bots: newBots, selectedFilter: 'none'})
      }
      else {
        let newBots = this.state.bots.slice();
        newBots = newBots.sort((a, b) => b.health - a.health);
        this.setState({bots: newBots, selectedFilter: 'health'})
      }
    }
    else if (val === 'P') {
      console.log('power')
      if(this.state.selectedFilter === 'damage'){
        // console.log(this.state.backupBots[0])
        // console.log('undo')
        let newBots = this.state.backupBots.slice();
        this.setState({bots: newBots, selectedFilter: 'none'})
      }
      else {
        let newBots = this.state.bots.slice();
        newBots = newBots.sort((a, b) => b.damage - a.damage);
        this.setState({bots: newBots, selectedFilter: 'damage'})
      }
    }
    else if (val === 'D') {
      console.log('defense')
      if(this.state.selectedFilter === 'armor'){
        // console.log(this.state.backupBots[0])
        // console.log('undo')
        let newBots = this.state.backupBots.slice();
        this.setState({bots: newBots, selectedFilter: 'none'})
      }
      else {
        let newBots = this.state.bots.slice();
        newBots = newBots.sort((a, b) => b.armor - a.armor);
        this.setState({bots: newBots, selectedFilter: 'armor'})
      }
    }
    else {

    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} onClick={this.removeFromArmy}/>
        {!!this.state.selectedBot ?
          <BotSpecs bot={this.state.selectedBot} onBack={this.removeSelected} onClick={this.addToArmy}/>
          :
          <div>
          <BotFilter onClick={this.sortBots}/>
          <BotCollection bots={this.state.bots} onClick={this.makeSelected}/>
          </div>
        }

        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
