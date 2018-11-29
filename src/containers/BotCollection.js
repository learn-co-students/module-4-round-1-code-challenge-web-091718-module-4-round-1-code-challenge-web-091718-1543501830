import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  state={
    fromArmyContainer:false
  }
  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map((bot)=>{
            return <BotCard container={this.state.fromArmyContainer} handleClickBot={this.props.handleClickBot} key={bot.id} bot={bot}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
