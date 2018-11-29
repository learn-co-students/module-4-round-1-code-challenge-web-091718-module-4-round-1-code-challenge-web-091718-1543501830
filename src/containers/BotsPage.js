import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botCollection:[]
  }
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots").then(r=>r.json())
    .then(data=>{
      this.setState({
        botCollection: data.map((bot)=>{
          return{...bot,inArmy:false}
        })
      })
    })
  }
  handleClickBot = (id,fromArmyContainer) =>{
    if(fromArmyContainer){
      let newBots = this.state.botCollection.map((bot)=>{
        if (bot.id===id){
          return {...bot,inArmy:false}
        }else{
          return{...bot}
        }
      })
      this.setState({botCollection:newBots})
    }else{
      let newBots = this.state.botCollection.map((bot)=>{
        if (bot.id===id){
          return {...bot,inArmy:true}
        }else{
          return{...bot}
        }
      })
      this.setState({botCollection:newBots})
    }
  }
  render() {
    return (
      <div>
        <YourBotArmy handleClickBot={this.handleClickBot} bots={this.state.botCollection.filter((bot)=>bot.inArmy)}/>
        <BotCollection handleClickBot={this.handleClickBot} bots={this.state.botCollection}/>
      </div>
    );
  }

}

export default BotsPage;
