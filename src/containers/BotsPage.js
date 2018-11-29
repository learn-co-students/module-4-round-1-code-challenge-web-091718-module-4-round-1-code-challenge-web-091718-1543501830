import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state= {
    bots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(json=>{
      let jsonArmy = json.map(botObj=>{
        return {...botObj, army: false}
      })

      this.setState({
        bots:jsonArmy
      })
    })
  }


  addBotToArmy=(props)=>{
    let updatedBots = this.state.bots.map(botObj=>{
      if (botObj.id===props.showId.id) {
        return {...botObj, army: !props.showId.army}
      } else{
        return botObj
      }
    })
    this.setState({
      bots: updatedBots
    })
  }

  render() {
    return (
      <div>
        {<YourBotArmy
          bots={this.state.bots}
          addBotToArmy={this.addBotToArmy}/>}
        {<BotCollection
          bots={this.state.bots}
          addBotToArmy={this.addBotToArmy}
          />}
      </div>
    );
  }

}

export default BotsPage;
