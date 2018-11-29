import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () => {
    return this.props.botsData.map(bot => <BotCard key={bot.id} bot={bot} setBotArmy={this.props.setBotArmy} setClickedBot={this.props.setClickedBot}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid" id="botCollection">
    		<div className="row">
          {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
