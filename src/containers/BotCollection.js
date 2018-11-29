import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => this.props.bots.map(bot => <BotCard key={bot.id} bot={bot}  toggleEnlistBot={this.props.toggleEnlistBot} inArmy={false}/>)

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
