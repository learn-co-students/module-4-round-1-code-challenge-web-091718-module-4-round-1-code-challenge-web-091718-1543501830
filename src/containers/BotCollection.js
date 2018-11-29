import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  genKey = () => {

  }

  renderBots = () => (
    this.props.bots.map(bot => <BotCard key={bot.name} onClick={this.props.onClick} bot={bot}/>)
  )

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
