import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  createBotCards = (bots) => {
    return bots.map(bot => {
      return <BotCard
        key={bot.id}
        bot={bot}
        enlistBotToArmy={this.props.enlistBotToArmy}
        alterViewMode={this.props.alterViewMode}
        selectBot={this.props.selectBot}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.createBotCards(this.props.bots)}
          Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
