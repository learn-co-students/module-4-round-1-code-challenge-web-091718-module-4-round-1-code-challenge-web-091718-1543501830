import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderCollection() {
    return this.props.bots.map(bot => {
      return (
        <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
      )
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderCollection()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
