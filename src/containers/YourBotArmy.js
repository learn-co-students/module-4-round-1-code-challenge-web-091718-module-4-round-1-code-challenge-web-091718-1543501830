import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  state={
    fromArmyContainer:true
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot)=>{
              return <BotCard container={this.state.fromArmyContainer} handleArmyAssigment={this.props.handleArmyAssigment} key={bot.id} bot={bot}/>
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
