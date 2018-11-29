import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBots = () => this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} toggleEnlistBot={this.props.toggleEnlistBot} inArmy={true} selectBot={this.props.selectBot}/>)


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
