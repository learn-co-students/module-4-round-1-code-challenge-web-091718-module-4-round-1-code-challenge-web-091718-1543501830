import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botCollection:[],
    showBotDetails:false,
    selectedBot:null
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
  handleArmyAssigment = (id,fromArmyContainer) =>{
    if(!!fromArmyContainer){
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
      this.setState({
        botCollection:newBots,
        showBotDetails:false,
        selectedBot:null
      })
    }
  }
  handleShowBotDetails = (id)=>{
    let foundBot = this.state.botCollection.find((bot)=>bot.id===id)
    this.setState({
      selectedBot:foundBot,
      showBotDetails:true
    })
  }
  handleGoBackToCollection = ()=>{
    this.setState({
      selectedBot:null,
      showBotDetails:false
    })
  }
  render() {
    return (
      <div>
        <YourBotArmy handleArmyAssigment={this.handleArmyAssigment} bots={this.state.botCollection.filter((bot)=>bot.inArmy)}/>
        {this.state.showBotDetails ? <BotSpecs handleArmyAssigment={this.handleArmyAssigment} handleGoBackToCollection={this.handleGoBackToCollection} bot={this.state.selectedBot}/>:<BotCollection handleShowBotDetails={this.handleShowBotDetails} handleArmyAssigment={this.handleArmyAssigment} bots={this.state.botCollection}/>}
      </div>
    );
  }

}

export default BotsPage;
