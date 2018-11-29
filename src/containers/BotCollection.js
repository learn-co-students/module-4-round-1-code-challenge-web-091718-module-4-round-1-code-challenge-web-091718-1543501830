import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    return this.props.getBotsNotInArmy().map(bot => <BotCard bot={bot} key={bot.id} onBotClick={this.props.onBotClick}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		 {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
