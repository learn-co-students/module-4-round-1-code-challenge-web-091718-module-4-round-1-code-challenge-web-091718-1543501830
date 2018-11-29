import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  createBotCards = (bots) => {
    return bots.map(bot => {
      return <BotCard
        key={bot.id}
        bot={bot}
        deEnlistBotFromArmy={this.props.deEnlistBotFromArmy}
        alterViewMode={this.props.alterViewMode}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.createBotCards(this.props.army)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
