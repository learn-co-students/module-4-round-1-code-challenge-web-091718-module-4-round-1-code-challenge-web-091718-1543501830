import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBotCards = () => {
    return this.props.botArmy.map(bot => <BotCard key={bot.id} bot={bot} setClickedBot={this.props.setBotArmy}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
