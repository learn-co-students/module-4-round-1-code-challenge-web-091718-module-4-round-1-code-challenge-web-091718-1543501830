import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => (
    this.props.army.map(bot => <BotCard key={`YA-${bot.name}`} onClick={this.props.onClick} bot={bot} />)
  )

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
